export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.06] px-4 md:px-8 py-10 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-primary text-sm font-medium mb-1">Automated by Zac</p>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Trading name of Zac Sladden. Registered in England and Wales.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[11px]">
            <div className="flex flex-col gap-2">
              <p className="text-primary/40 uppercase tracking-widest text-[9px] mb-1">Legal</p>
              <a href="/privacy" className="text-gray-500 hover:text-primary transition-colors duration-200">Privacy Policy</a>
              <a href="/cookies" className="text-gray-500 hover:text-primary transition-colors duration-200">Cookie Policy</a>
              <a href="/terms" className="text-gray-500 hover:text-primary transition-colors duration-200">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-primary/40 uppercase tracking-widest text-[9px] mb-1">Connect</p>
              <a
                href="https://www.linkedin.com/in/zacsladden?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a href="#contact" className="text-gray-500 hover:text-primary transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-gray-600 text-[11px]">
            © {year} Zac Sladden. All rights reserved.
          </p>
          <p className="text-gray-600 text-[11px] max-w-md sm:text-right leading-relaxed">
            Personal data submitted via this site is processed in accordance with the UK GDPR and the
            Data Protection Act 2018. We do not sell or share your data with third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
