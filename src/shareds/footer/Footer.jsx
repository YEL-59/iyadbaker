import React from "react";
import { Link } from "react-router";

const usefulLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact Us", path: "/contact" },
  { label: "Get Started", path: "/get-started" },
];

const legalLinks = [
  { label: "Terms of Use", path: "/terms-and-conditions" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link to="/" className="text-base font-bold text-white">Leadsnsaas</Link>
            <p className="text-[13px] italic text-white/70">Your Pipeline Supercharged</p>
            <p className="text-[12px] leading-relaxed text-white/60">
              Running a service business is demanding—managing technicians,
              scheduling jobs, handling payments, keeping customers happy, and
              staying profitable all require precision and efficiency.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">Useful links</p>
            <div className="flex flex-col gap-2">
              {usefulLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[13px] text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">Legal</p>
            <div className="flex flex-col gap-2">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-[13px] text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">Get In Touch</p>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p className="text-[13px] leading-relaxed text-white/60">
                77 Lower Camden Street, Dunlin 2
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6.75c0-.97.78-1.75 1.75-1.75h12.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 17.25z" />
                <path d="m5 7 7 5 7-5" />
              </svg>
              <a
                href="mailto:info@clevfox.com"
                className="text-[13px] text-white/60 transition hover:text-white"
              >
                info@clevfox.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        Copyright © {new Date().getFullYear()} | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
