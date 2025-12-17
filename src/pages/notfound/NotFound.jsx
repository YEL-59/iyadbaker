import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <section className="bg-white min-h-[80vh] flex items-center justify-center px-4">
            <div className="container mx-auto max-w-2xl text-center">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <h1 className="font-poppins text-[180px] sm:text-[220px] font-bold text-[var(--color-navbar)]/10 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[var(--color-accent)] rounded-full p-6 shadow-xl shadow-[var(--color-accent)]/30">
                            <svg
                                className="w-12 h-12 text-[var(--color-navbar)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="font-poppins text-[32px] sm:text-[40px] font-bold text-[var(--color-navbar)] mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="font-poppins text-[16px] leading-[26px] text-slate-500 mb-10 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved. 
                    Don't worry, let's get you back on track!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[15px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/30 flex items-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3.5 border-2 border-[var(--color-navbar)] text-[var(--color-navbar)] font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)] hover:text-white transition-colors flex items-center gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Contact Support
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="font-poppins text-[14px] text-slate-400 mb-4">
                        Or try these popular pages:
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            { label: "Services", path: "/services" },
                            { label: "Pricing", path: "/pricing" },
                            { label: "About Us", path: "/about" },
                            { label: "Get Started", path: "/get-started" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className="font-poppins text-[14px] text-[var(--color-navbar)] hover:text-[var(--color-navbar)]/70 underline underline-offset-2 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound

