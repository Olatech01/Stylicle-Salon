import Link from "next/link";




const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const utilityLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#1e1520" }} className="text-[#c9b8c8] font-sans">
      <div className="max-w-6xl mx-auto px-10">

        {/* Top bar */}
        <div className="flex items-center justify-between py-8 border-b border-white/10 flex-wrap gap-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-white/50 rounded-md flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.4" />
                <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.4" />
                <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.4" />
                <rect x="12" y="12" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.4" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium tracking-widest uppercase">
              Stylicle
            </span>
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 border border-white/25 rounded-md flex items-center justify-center text-white/70 hover:border-white/60 hover:text-white transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">

          {/* Explore */}
          <div>
            <p className="text-white text-sm font-medium mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#b8a4b6] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <p className="text-white text-sm font-medium mb-5">Utility Pages</p>
            <ul className="flex flex-col gap-3">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#b8a4b6] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep in Touch */}
          <div>
            <p className="text-white text-sm font-medium mb-5">Keep in Touch</p>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-white font-medium min-w-[60px] shrink-0 pt-0.5">
                  Address :
                </span>
                <span className="text-[#b8a4b6] leading-relaxed">
                  Mariendalsvej 50D 2 2000
                  <br />
                  Frederiksberg.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium min-w-[60px] shrink-0">
                  Mail :
                </span>
                <span className="text-[#b8a4b6]">support@servicemarket.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium min-w-[60px] shrink-0">
                  Phone :
                </span>
                <span className="text-[#b8a4b6]">(+22) 123 - 4567 - 900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 text-center text-xs text-[#7a6a79]">
          © {year} &nbsp; ServiceMarket.dk &nbsp;&nbsp; All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;