'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="font-mono text-sm w-full h-full p-4 border-r border-gray-200 dark:border-gray-800">
      <div
        className="flex items-center gap-2 cursor-pointer mb-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="transform transition-transform text-[10px]"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
        <span className="font-bold uppercase tracking-wider text-xs">
          dawi369.github.io
        </span>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-1 ml-4 border-l border-gray-200 dark:border-gray-800 pl-2">
          {/* Docs Folder */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-[10px]">▼</span>
              <span>docs</span>
            </div>
            <div className="flex flex-col gap-1 ml-4 border-l border-gray-200 dark:border-gray-800 pl-2">
              <Link
                href="/about"
                className={`block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${pathname === '/about' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : ''}`}
              >
                about.md
              </Link>
              <Link
                href="/vision"
                className={`block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${pathname === '/vision' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : ''}`}
              >
                vision.md
              </Link>
            </div>
          </div>

          {/* Root Files */}
          <Link
            href="/"
            className={`block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${pathname === '/' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : ''}`}
          >
            README.md
          </Link>
        </div>
      )}
    </nav>
  );
}
