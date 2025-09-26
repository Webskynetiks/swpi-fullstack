import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const API_BASE = 'http://localhost:8080/api/v1/blog';

export default function BlogAdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', image: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin'); // redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/all-blog`);
      const data = await res.json();
      if (data.success) setBlogs(data.blogs);
      else setError(data.message);
    } catch (err) {
      setError('Failed to fetch blogs');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) fetchBlogs();
  }, [isLoggedIn]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/admin');
  };

  // Handle form input
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update blog
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_BASE}/update-blog/${editingId}` : `${API_BASE}/create-blog`;
      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        fetchBlogs();
        setForm({ title: '', description: '', image: '' });
        setEditingId(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to submit blog');
    }
    setLoading(false);
  };

  // Edit blog
  const handleEdit = blog => {
    router.push(`/admin/edit/${blog._id}`);
  };

  // Delete blog
  const handleDelete = async id => {
    if (!window.confirm('Delete this blog?')) return;
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/delete-blog/${id}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) fetchBlogs();
      else setError(data.message);
    } catch (err) {
      setError('Failed to delete blog');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-8 relative">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 text-center tracking-tight">Admin Blog Dashboard</h2>
      
      {/* Logout button */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition"
        >
          Logout
        </button>
      )}

      {error && <div className="text-red-600 mb-4 text-center font-semibold">{error}</div>}
      
      <div className="flex justify-end mb-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
          onClick={() => router.push('/admin/add')}
        >
          Add Blog
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-blue-800">All Blogs</h3>
      {loading ? (
        <div className="text-center py-8 text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog._id} className="bg-white border border-blue-200 rounded-lg shadow hover:shadow-lg transition flex flex-col">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-blue-900 mb-2 truncate">{blog.title}</h4>
                <div className="text-blue-800 text-sm flex-1 mb-4 break-words prose prose-sm" dangerouslySetInnerHTML={{ __html: blog.description.split(" ").slice(0, 15).join(" ") }} />
                <div className="flex gap-2 mt-auto">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded font-semibold transition" onClick={() => handleEdit(blog)}>Edit</button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-semibold transition" onClick={() => handleDelete(blog._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
