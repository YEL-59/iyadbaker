import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

const VerifyOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [timer, setTimer] = useState(60)
    const inputRefs = useRef([])
    const navigate = useNavigate()

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
        if (value && index < 5) {
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
        const pastedData = e.clipboardData.getData('text').slice(0, 6)
        const newOtp = [...otp]
        pastedData.split('').forEach((char, index) => {
            if (index < 6) newOtp[index] = char
        })
        setOtp(newOtp)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const otpValue = otp.join('')
        console.log('Verify OTP:', otpValue)
        navigate('/reset-password')
    }

    const handleResend = () => {
        setTimer(60)
        // Resend logic here
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                            Verify Code
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500">
                            Enter the 6-digit code sent to your email
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
                                    className="font-poppins text-[14px] text-[var(--color-navbar)] font-semibold hover:underline"
                                >
                                    Resend Code
                                </button>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={otp.some(d => !d)}
                            className="w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Verify Code
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

export default VerifyOTP

