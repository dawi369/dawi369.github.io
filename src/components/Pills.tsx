'use client';

export function Pills() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    // Custom smooth scroll implementation that ignores trackpad/hover interruptions
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    // Dynamic duration based on distance (min 500ms, max 1000ms)
    const duration = Math.min(Math.max(Math.abs(distance) / 2, 500), 1000);
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // easeInOutCubic transition
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    
    // Update URL hash without jumping
    history.pushState(null, '', `#${id}`);
  };

  return (
    <>
      {/* Desktop Navigation - Left Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-[15%] hidden md:flex items-center justify-center">
        <div className="flex flex-col gap-2 px-4 w-full">
          <a
            href="#me"
            onClick={(e) => scrollToSection(e, 'me')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200 block"
          >
            Me
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200 block"
          >
            Projects
          </a>
          <a
            href="#articles"
            onClick={(e) => scrollToSection(e, 'articles')}
            className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200 block"
          >
            Articles
          </a>

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
              href="https://www.youtube.com/@dawi_dev"
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
            <a
              href="#me"
              onClick={(e) => scrollToSection(e, 'me')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Me
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#articles"
              onClick={(e) => scrollToSection(e, 'articles')}
              className="px-4 py-2.5 rounded-full text-xs text-center hover:bg-gray-100 active:bg-gray-200 transition-colors border border-gray-200 min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Articles
            </a>
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
