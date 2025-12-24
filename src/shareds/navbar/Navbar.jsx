import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router";
import fbIcon from "@/assets/fb.png";
import twitterIcon from "@/assets/twiter.png";
import linkedinIcon from "@/assets/linkdin.png";
import instagramIcon from "@/assets/insta.png";

import { useUserInfo } from "@/hook/auth.hook";
import { useTheme } from "@/context/ThemeContext";

const socialIcons = [
  { src: fbIcon, alt: "Facebook", url: "#" },
  { src: twitterIcon, alt: "Twitter", url: "#" },
  { src: linkedinIcon, alt: "LinkedIn", url: "#" },
  { src: instagramIcon, alt: "Instagram", url: "#" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { data: userInfo, isLoading } = useUserInfo();
  const { theme, toggleTheme } = useTheme();

  const user = userInfo?.data || userInfo;
  const isLoggedIn = !!user;
  const userName = user?.name || "User";
  const userEmail = user?.email || "";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsProfileOpen(false);
    window.location.reload(); // Simple way to reset query state and app state
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[var(--color-topbar)] text-white text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row">
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
                <path d="M2.5 5.5c0-1.1.9-2 2-2h2.1c.5 0 .9.2 1.2.6l1.5 2.5c.3.5.3 1 0 1.5l-1 1.6c1.1 2 2.9 3.9 4.9 4.9l1.6-1.6c.5-.3 1-.3 1.5 0l2.5 1.5c.4.3.6.7.6 1.2V19.5c0 1.1-.9 2-2 2h-1C9.3 21.5 2.5 14.7 2.5 6.5z" />
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
      <div className="bg-[var(--color-navbar)] text-white border-b border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row">
          <Link to="/" className="text-center md:text-left">
            <p className="text-lg font-semibold leading-tight text-white">Leadsnsaas</p>
            <p className="text-xs font-medium text-white/80">Your Pipeline Supercharged</p>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => 
                  `transition-all duration-300 hover:text-white py-1.5 relative ${
                    isActive 
                      ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--color-accent)]" 
                      : "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/0 hover:after:w-full hover:after:bg-white/20 transition-all after:transition-all"
                  }`
                }
                aria-label={link.label}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white group"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707-.707M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              )}
            </button>

            {/* Get Started Button - Always visible */}
            <Link
              to="/get-started"
              className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-navbar)] shadow-sm transition hover:brightness-95"
            >
              Get Started
            </Link>

            {isLoggedIn ? (
              /* Profile Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-yellow-400 flex items-center justify-center text-[var(--color-navbar)] font-bold text-sm">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-white">{userName}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isProfileOpen ? "rotate-180" : ""} text-white`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-fade-in text-slate-900 dark:text-white">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                      <p className="font-poppins text-[14px] font-semibold text-slate-800 dark:text-white">{userName}</p>
                      <p className="font-poppins text-[12px] text-slate-500 dark:text-slate-400">{userEmail}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        to="/my-bookings"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="font-poppins text-[14px]">My Bookings</span>
                      </Link>

                      <Link
                        to="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-poppins text-[14px]">Profile</span>
                      </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-poppins text-[14px] font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Sign In Button - Only when not logged in */
              <Link
                to="/sign-in"
                className="hidden sm:block text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
