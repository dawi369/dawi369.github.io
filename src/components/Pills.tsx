export function Pills() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-[15%] hidden md:flex items-center justify-center">
      <div className="flex flex-col gap-2 px-4 w-full">
        <a
          href="#about"
          className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
        >
          About
        </a>
        <a
          href="#work"
          className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
        >
          Work
        </a>
        <a
          href="#education"
          className="px-4 py-2 rounded-full text-sm text-center hover:bg-gray-100 transition-colors border border-gray-200"
        >
          Education
        </a>
      </div>
    </nav>
  );
}
