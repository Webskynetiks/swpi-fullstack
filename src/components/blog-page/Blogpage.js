import Link from 'next/link';
import Image from 'next/image';
/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full border border-gray-400">
      <img
        src={post.image}
        alt={post.title}
        width={400}
        height={250}
        className="w-full object-cover h-50 lg:h-60"
      />
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[#3b4047] hover:underline">
          <Link href={`/blog/${post._id}`}>{post.title}</Link>
        </h3>
      
<div
  className="text-black/800 text-sm flex-1 my-2 break-words prose prose-sm"
  dangerouslySetInnerHTML={{
    __html: post.description.split(" ").slice(0, 10).join(" ")  + " " + "........",
  }}
/>

        <div className="mt-auto">
          <Link
            href={`/blog/${post._id}`}
            className="bg-[#3b4047] inline-block rounded text-white p-3 text-sm hover:underline  "
          >
            Read more »
          </Link>
        </div>
      </div>
    </div>
  );
}
