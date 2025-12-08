import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[var(--color-navbar)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-10 border-t border-white/10 pt-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs space-y-2 text-sm text-white/80">
            <p className="text-lg font-semibold text-white">Leadsnsaas</p>
            <p className="text-[13px] leading-relaxed">
              Running a service business is demanding; managing technicians,
              scheduling jobs, handling payments, keeping customers happy, and
              staying profitable all require precision and efficiency.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 text-sm text-white/80 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Useful links</p>
              <div className="flex flex-col gap-2">
                {["Home", "About us", "Services", "Pricing", "Contact us", "Get Started"].map(
                  (item) => (
                    <a key={item} href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Legal</p>
              <div className="flex flex-col gap-2">
                {["Terms of Use", "Privacy Policy"].map((item) => (
                  <a key={item} href="#" className="transition hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-white">Get in Touch</p>
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mt-1 h-4 w-4 shrink-0 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p className="text-[13px] leading-relaxed">
                  77 Lower Camden Street, Dublin 2
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 6.75c0-.97.78-1.75 1.75-1.75h12.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 17.25z" />
                  <path d="m5 7 7 5 7-5" />
                </svg>
                <a href="mailto:info@deanartex.com" className="text-[13px] transition hover:text-white">
                  info@deanartex.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-topbar)] py-3 text-center text-xs text-white/90">
        Copyright © {new Date().getFullYear()} | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
