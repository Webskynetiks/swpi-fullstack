import React, { useEffect, useState } from 'react';
import Layout from '@/layout/Layout';
import BlogCard from '@/components/blog-page/Blogpage';
import Head from 'next/head';

const API_BASE = 'http://localhost:8080/api/v1/blog';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/all-blog`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setBlogs(data.blogs);
        else setError(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch blogs');
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Blog Posts</h1>
        {error && <div className="text-red-600 mb-4 text-center font-semibold">{error}</div>}
        {loading ? (
          <div className="text-center py-8 text-lg">Loading...</div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
