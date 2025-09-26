// export default {
//   output: 'export', // Enables static HTML export
//   images: {
//     unoptimized: true, // Disable image optimization for static export
//   },
//   trailingSlash: true, // Optional: Ensure URLs have trailing slashes
// };

/** @type {import {  } from "module";('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'webservicesindia.info',
      'weights-swpi.com',
      'encrypted-tbn0.gstatic.com',
      'businessoncloud.in',
      'storage.googleapis.com',
      'res.cloudinary.com'
     

    ],
  },
};
export default nextConfig; //  Use "export default" instead of "module.exports"
