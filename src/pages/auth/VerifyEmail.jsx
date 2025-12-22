import React, { useState, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useVerifyEmail, useResendOtp } from '../../hook/auth.hook'

const VerifyEmail = () => {
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')

    const { mutate: verifyEmail, isPending: isVerifying } = useVerifyEmail()
    const { mutate: resendOtp, isPending: isResending } = useResendOtp()

    const [otp, setOtp] = useState(['', '', '', ''])
    const [timer, setTimer] = useState(60)
    const inputRefs = useRef([])

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timer])

    const handleChange = (index, value) => {
        if (value.length > 1) return
        
        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        // Auto focus next input
        if (value && index < 4) {
            inputRefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, 4)
        const newOtp = [...otp]
        pastedData.split('').forEach((char, index) => {
            if (index < 4) newOtp[index] = char
        })
        setOtp(newOtp)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const otpValue = otp.join('')
        if (email && otpValue.length === 4) {
            verifyEmail({ email, otp: otpValue })
        }
    }

    const handleResend = () => {
        if (email) {
            resendOtp(email)
            setTimer(60)
        }
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
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--color-navbar)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                            Verify Email
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500">
                            Enter the 4-digit code sent to <br/>
                            <span className="font-semibold">{email}</span>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* OTP Inputs */}
                        <div className="flex justify-center gap-3">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={el => inputRefs.current[index] = el}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className="w-12 h-14 text-center text-xl font-bold border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                />
                            ))}
                        </div>

                        {/* Timer */}
                        <div className="text-center">
                            {timer > 0 ? (
                                <p className="font-poppins text-[14px] text-slate-500">
                                    Resend code in <span className="font-semibold text-[var(--color-navbar)]">{timer}s</span>
                                </p>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    disabled={isResending}
                                    className="font-poppins text-[14px] text-[var(--color-navbar)] font-semibold hover:underline disabled:opacity-50"
                                >
                                    {isResending ? 'Sending...' : 'Resend Code'}
                                </button>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={otp.some(d => !d) || isVerifying}
                            className="w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isVerifying ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Verify Email'
                            )}
                        </button>
                    </form>

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

export default VerifyEmail
