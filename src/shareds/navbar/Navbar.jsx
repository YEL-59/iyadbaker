import React from "react";
import fbIcon from "@/assets/fb.png";
import twitterIcon from "@/assets/twiter.png";
import linkedinIcon from "@/assets/linkdin.png";
import instagramIcon from "@/assets/insta.png";

const socialIcons = [
  { src: fbIcon, alt: "Facebook" },
  { src: twitterIcon, alt: "Twitter" },
  { src: linkedinIcon, alt: "LinkedIn" },
  { src: instagramIcon, alt: "Instagram" },
];

const navLinks = ["Home", "About us", "Services", "Pricing", "Contact us"];

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[var(--color-topbar)] text-white text-xs sm:text-sm">
        <div className="container mx-auto flex  flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2.5 5.5c0-1.1.9-2 2-2h2.1c.5 0 .9.2 1.2.6l1.5 2.5c.3.5.3 1 0 1.5l-1 1.6c1.1 2 2.9 3.9 4.9 4.9l1.6-1c.5-.3 1-.3 1.5 0l2.5 1.5c.4.3.6.7.6 1.2V19.5c0 1.1-.9 2-2 2h-1C9.3 21.5 2.5 14.7 2.5 6.5z" />
              </svg>
              <span className="font-medium">Call us</span>
              <span className="font-semibold">+098-12344</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6.75c0-.97.78-1.75 1.75-1.75h12.5C19.22 5 20 5.78 20 6.75v10.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 17.25z" />
                <path d="m5 7 7 5 7-5" />
              </svg>
              <span className="font-medium">Email us</span>
              <span className="font-semibold">leadsnsaas@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-medium sm:inline">Follow us on</span>
            <div className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <span
                  key={icon.alt}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/15 p-1"
                >
                  <img src={icon.src} alt={icon.alt} className="h-3.5 w-3.5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[var(--color-navbar)] text-white">
        <div className="container mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold leading-tight">Leadsnsaas</p>
            <p className="text-xs font-medium text-white/80">Your Pipeline Supercharged</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-white/90">
            {navLinks.map((label) => (
              <a
                key={label}
                className="transition hover:text-white"
                href="#"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-navbar)] shadow-sm transition hover:brightness-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
