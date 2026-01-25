'use client';

import { useEffect } from 'react';

export function Pills() {
  // Empty useEffect can be removed, but keeping for potential future use
  useEffect(() => {}, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Check mobile directly to avoid stale state
    const isMobileView = window.innerWidth < 768;

    if (isMobileView) {
      // Mobile: put title at top with offset for bottom nav
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementTop - 20),
        behavior: 'smooth',
      });
    } else {
      // Desktop: center the section
      const elementRect = element.getBoundingClientRect();
      const elementHeight = elementRect.height;
      const viewportHeight = window.innerHeight;
      const elementTop = elementRect.top + window.scrollY;
      const scrollTo = elementTop - (viewportHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Left Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-[15%] hidden md:flex items-center justify-center">
        <div className="flex flex-col gap-2 px-4 w-full">
          <button
            onClick={() => scrollToSection('me')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Me
          </button>
          <button
            onClick={() => scrollToSection('tech')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Tech
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Education
          </button>

          {/* Social Media Icons */}
          <div className="flex gap-2 justify-center mt-4">
            <a
              href="https://x.com/devDawi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/david-erwin-cz68"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@daviderwindotme"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="YouTube"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 pb-safe z-50">
        <div className="px-4 py-3">
          {/* Section Links */}
          <div className="flex gap-2 justify-center mb-3">
            <button
              onClick={() => scrollToSection('me')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center"
            >
              Me
            </button>
            <button
              onClick={() => scrollToSection('tech')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center"
            >
              Tech
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center"
            >
              Education
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 justify-center">
            <a
              href="https://x.com/devDawi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/david-erwin-cz68"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@daviderwindotme"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200"
              aria-label="YouTube"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
