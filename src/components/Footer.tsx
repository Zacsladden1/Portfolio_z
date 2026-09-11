export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.06] px-4 md:px-8 py-10 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-primary text-sm font-medium mb-1">Built by Zac</p>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Trading name: Automated by Zac. Operated by Zac Sladden.
            </p>
            <p className="text-gray-400 text-[11px] mt-2">
              <a href="mailto:zac@builtby.ai" className="hover:text-primary transition-colors duration-200">
                zac@builtby.ai
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[11px]">
            <div className="flex flex-col gap-2">
              <p className="text-primary/40 uppercase tracking-widest text-[9px] mb-1">Navigate</p>
              <a href="#about" className="text-gray-500 hover:text-primary transition-colors duration-200">About</a>
              <a href="#features" className="text-gray-500 hover:text-primary transition-colors duration-200">Services</a>
              <a href="#work" className="text-gray-500 hover:text-primary transition-colors duration-200">Work</a>
              <a href="#contact" className="text-gray-500 hover:text-primary transition-colors duration-200">Contact</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-primary/40 uppercase tracking-widest text-[9px] mb-1">Connect</p>
              <a
                href="https://www.linkedin.com/in/zacsladden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a href="mailto:zac@builtby.ai" className="text-gray-500 hover:text-primary transition-colors duration-200">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-gray-600 text-[11px] text-center">
            © {year} Zac Sladden. Built by Zac / Automated by Zac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
