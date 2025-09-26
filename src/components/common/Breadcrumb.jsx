'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMemo } from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbLinks = useMemo(() => {
    const paths = pathname.split('/').filter(Boolean);
    const links = paths.map((path, index) => {
      const linkPath = '/' + paths.slice(0, index + 1).join('/');
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1),
        to: linkPath,
      };
    });

    return [{ label: 'Home', to: '/' }, ...links];
  }, [pathname]);

  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-lg shadow-md w-fit mt-[18vh]">
      <ul className="flex items-center text-sm text-gray-600 space-x-2">
        {breadcrumbLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            <Link
              href={link.to}
              className={`${
                index === breadcrumbLinks.length - 1
                  ? 'text-gray-900 font-semibold'
                  : 'text-blue-600 hover:underline'
              }`}
            >
              {link.label}
            </Link>
            {index < breadcrumbLinks.length - 1 && <span className="mx-2 text-gray-400">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
