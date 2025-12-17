import React, { useState } from 'react'
import { Link } from 'react-router'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Reset password for:', email)
        setIsSubmitted(true)
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#E8F1FD] to-white flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block">
                        <h1 className="font-poppins text-2xl font-bold text-[var(--color-navbar)]">
                            Leadsnsaas
                        </h1>
                        <p className="text-xs text-slate-500">Your Pipeline Supercharged</p>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {!isSubmitted ? (
                        <>
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[var(--color-navbar)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                                    Forgot Password?
                                </h2>
                                <p className="font-poppins text-[14px] text-slate-500">
                                    No worries! Enter your email and we'll send you a reset code.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 pl-11 border border-slate-200 rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                        />
                                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30"
                                >
                                    Send Reset Code
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            {/* Success State */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                                    Check Your Email
                                </h2>
                                <p className="font-poppins text-[14px] text-slate-500">
                                    We've sent a verification code to <br />
                                    <span className="font-semibold text-[var(--color-navbar)]">{email}</span>
                                </p>
                            </div>

                            <Link
                                to="/verify-otp"
                                className="block w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30 text-center"
                            >
                                Enter Verification Code
                            </Link>

                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full mt-4 py-3 text-slate-600 font-poppins text-[14px] hover:text-[var(--color-navbar)] transition-colors"
                            >
                                Didn't receive the email? <span className="font-semibold underline">Resend</span>
                            </button>
                        </>
                    )}

                    {/* Back to Sign In */}
                    <div className="mt-8 text-center">
                        <Link to="/sign-in" className="inline-flex items-center gap-2 font-poppins text-[14px] text-slate-600 hover:text-[var(--color-navbar)] transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword

