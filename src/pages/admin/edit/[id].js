import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Layout from '@/layout/Layout';
import ImageUpload from '@/components/common/ImageUpload';

const API_BASE = 'http://localhost:8080/api/v1/blog';

// Dynamically import ReactQuill (client only)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  // Quill toolbar + formats
  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  }), []);

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
  ];

  // Fetch blog by ID
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`${API_BASE}/get-blog/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setForm({
            title: data.blog.title || '',
            description: data.blog.description || '',
            image: data.blog.image || '',
            metaTitle: data.blog.metaTitle || '',
            metaDescription: data.blog.metaDescription || '',
            metaKeywords: (data.blog.metaKeywords || []).join(', ')
          });
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch blog');
        setLoading(false);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = (imageUrl) => {
    setForm({ ...form, image: imageUrl });
  };

  const handleEditorChange = (content) => {
    setForm(f => ({ ...f, description: content }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');

      // Convert metaKeywords string to array
      const submitData = {
        ...form,
        metaKeywords: form.metaKeywords.split(',').map(k => k.trim())
      };

      const res = await fetch(`${API_BASE}/update-blog/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('Blog updated successfully!');
        setTimeout(() => router.push('/admin'), 1200);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to update blog');
    }

    setLoading(false);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-extrabold mb-6 text-blue-900 text-center tracking-tight">Edit Blog</h2>
        {error && <div className="text-red-600 mb-4 text-center font-semibold">{error}</div>}
        {success && <div className="text-green-600 mb-4 text-center font-semibold">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 bg-blue-50 p-6 rounded-lg shadow">
          {/* Title */}
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Featured Image */}
          <ImageUpload 
            onImageUpload={handleImageUpload}
            currentImage={form.image}
            label="Blog Featured Image"
          />

          {/* Description */}
          <div className="bg-white rounded border border-blue-200 p-2 min-h-[150px] wrapper">
            <ReactQuill
              value={form.description}
              onChange={handleEditorChange}
              theme="snow"
              placeholder="Edit your blog content..."
              modules={modules}
              formats={formats}
            />
          </div>

          {/* Meta Fields */}
          <input
            name="metaTitle"
            value={form.metaTitle}
            onChange={handleChange}
            placeholder="Meta Title"
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="metaDescription"
            value={form.metaDescription}
            onChange={handleChange}
            placeholder="Meta Description"
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="metaKeywords"
            value={form.metaKeywords}
            onChange={handleChange}
            placeholder="Meta Keywords (comma separated)"
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="submit"
              className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              Update Blog
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded bg-gray-400 hover:bg-gray-500 text-white font-semibold"
              onClick={() => router.push('/admin')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
