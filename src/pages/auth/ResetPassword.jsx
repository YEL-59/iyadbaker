import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useResetPassword } from '../../hook/auth.hook'

const ResetPassword = () => {
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')
    
    const { form, mutate, isPending } = useResetPassword()
    const { register, handleSubmit, formState: { errors }, setValue } = form

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Sync email from search params to form state
    React.useEffect(() => {
        if (email) {
            setValue('email', email)
        }
    }, [email, setValue])

    const onSubmit = (data) => {
        mutate(data)
    }

    // Password strength checker
    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, label: '', color: '' }
        
        let strength = 0
        if (password.length >= 8) strength++
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^a-zA-Z0-9]/.test(password)) strength++

        const labels = ['Weak', 'Fair', 'Good', 'Strong']
        const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']

        return {
            strength,
            label: labels[strength - 1] || '',
            color: colors[strength - 1] || ''
        }
    }
    
    // We watch the password field for strength check
    const password = form.watch('password')
    const passwordStrength = getPasswordStrength(password)

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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                            Reset Password
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500">
                            Create a new secure password for {email}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* New Password */}
                        <div>
                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password")}
                                    placeholder="••••••••"
                                     className={`w-full px-4 py-3 pl-11 pr-11 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.password ? 'border-red-500' : 'border-slate-200'}`}
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500 font-poppins">{errors.password.message}</p>
                            )}
                            
                            {/* Password Strength */}
                            {password && (
                                <div className="mt-2">
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4].map((level) => (
                                            <div
                                                key={level}
                                                className={`h-1 flex-1 rounded-full ${
                                                    level <= passwordStrength.strength
                                                        ? passwordStrength.color
                                                        : 'bg-slate-200'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="font-poppins text-[12px] text-slate-500">
                                        Password strength: <span className="font-medium">{passwordStrength.label}</span>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    {...register("password_confirmation")}
                                    placeholder="••••••••"
                                     className={`w-full px-4 py-3 pl-11 pr-11 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.password_confirmation ? 'border-red-500' : 'border-slate-200'}`}
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password_confirmation && (
                                <p className="mt-1 text-xs text-red-500 font-poppins">{errors.password_confirmation.message}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                             {isPending ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Reset Password'
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

export default ResetPassword

