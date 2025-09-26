import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/layout/Layout';
import Breadcrumbs from '@/components/Breadcrumb_new';
import Head from 'next/head';

const API_BASE = 'http://localhost:8080/api/v1/blog';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`${API_BASE}/get-blog/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setBlog(data.blog);
        else setError(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch blog');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center py-20 text-red-600">{error}</p>;
  if (!blog) return <p className="text-center py-20">No blog found.</p>;

  return (
    <Layout>
      <Head>
        <title>{blog.metaTitle} | </title>
        <meta name="description" content={blog.metaDescription || ''} />
        <meta name="keywords" content={blog.metaKeywords || ''} />
      </Head>
      <div className="max-w-5xl mx-auto py-12 px-4">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={500}
            className="rounded-lg mb-6"
          />
        )}
      

                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{blog.title}</h1>

        <div className="prose prose-lg text-gray-800 mt-6">
          {blog.description && (
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          )}
        </div>
      </div>
    </Layout>
  );
}
