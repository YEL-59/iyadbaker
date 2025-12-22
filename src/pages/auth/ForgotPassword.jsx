import React, { useState } from 'react'
import { Link } from 'react-router'
import { useForgotPassword } from '../../hook/auth.hook'

const ForgotPassword = () => {
    const { form, mutate, isPending } = useForgotPassword()
    const { register, handleSubmit, formState: { errors } } = form
    
    // We can rely on the hook to navigate to verify-otp on success.
    // Or we case use state if we wanted to show the manual "Check your email" screen here.
    // The previous design had an `isSubmitted` state to show a success message.
    // The hook in `auth.hook.js` navigates to `/verify-otp` on success.
    // So we don't need the local `isSubmitted` state if we follow the hook's flow.
    // However, if we want to keep the UI consistent with the original design (showing "Check Your Email" here),
    // we should update the hook to NOT navigate, OR update this component to rely on navigation.
    // Given the hook navigates, I will remove the local success state to avoid conflict/duplication.

    const onSubmit = (data) => {
        mutate(data)
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

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            {...register("email")}
                                            placeholder="you@example.com"
                                            className={`w-full px-4 py-3 pl-11 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                                        />
                                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-500 font-poppins">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                     {isPending ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        'Send Reset Code'
                                    )}
                                </button>
                            </form>
                        </>

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

