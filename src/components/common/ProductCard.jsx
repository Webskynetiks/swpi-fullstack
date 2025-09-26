import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, Award, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, index = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {product.shortTitle}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        
                 <div className="mb-4">
           <div className="flex items-center text-sm text-gray-500 mb-2">
             <Package className="w-4 h-4 mr-2" />
             {product.specifications.denomination}
           </div>
           <div className="flex items-center text-sm text-gray-500">
             <Award className="w-4 h-4 mr-2" />
             {product.specifications.specification}
           </div>
         </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
