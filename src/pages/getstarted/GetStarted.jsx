import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useServices } from '@/hook/service.hook'

import { getStartedSchema } from '@/lib/schemas'
import getStartedImg from '@/assets/hero-img.png'
import { useGetStarted } from '@/hook/contact.hook'

const GetStarted = () => {
    const { data: servicesResponse, isLoading: servicesLoading } = useServices({ per_page: 100 })
    const servicesData = servicesResponse?.data?.data || []

    const { mutate: submitForm, isPending: isSubmitting, isSuccess } = useGetStarted()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue
    } = useForm({
        resolver: zodResolver(getStartedSchema),
        defaultValues: {
            name: '',
            company_name: '',
            email: '',
            phone: '',
            lead_service_id: '',
            message: '',
            privacy_policy: false
        }
    })

    // Reset form after successful submission
    useEffect(() => {
        if (isSuccess) {
            reset()
        }
    }, [isSuccess, reset])

    const onSubmit = (data) => {
        // Map data to API payload
        const payload = {
            ...data,
            lead_service_id: Number(data.lead_service_id),
            privacy_policy: data.privacy_policy ? 1 : 0
        }
        submitForm(payload)
    }

    return (
        <section className="bg-background py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[36px] font-bold text-slate-900 dark:text-white text-center mb-12">
                    Tell Us What You Need
                </h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <div>
                        <h2 className="font-poppins text-[28px] font-bold text-slate-800 dark:text-white mb-2">
                            Get Started
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500 dark:text-slate-400 mb-8">
                            Fill out the form below and we'll get back to you with the next steps.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('name')}
                                        placeholder="Full name"
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                                            errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                        }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        {...register('company_name')}
                                        placeholder="Apple.inc"
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                                            errors.company_name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                        }`}
                                    />
                                    {errors.company_name && <p className="text-red-500 text-[12px] mt-1">{errors.company_name.message}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    placeholder="you@company.com"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                    }`}
                                />
                                {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    {...register('phone')}
                                    placeholder="+1 (555) 000-0000"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                                        errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                    }`}
                                />
                                {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Select a Service */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Select a services
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('lead_service_id')}
                                        disabled={servicesLoading}
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer disabled:opacity-50 ${
                                            errors.lead_service_id ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                        }`}
                                    >
                                        <option value="" className="dark:bg-slate-900">{servicesLoading ? 'Loading services...' : 'Select a service...'}</option>
                                        {servicesData.map((service) => (
                                            <option key={service.id} value={service.id} className="dark:bg-slate-900">
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* Dropdown Arrow */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-slate-400 dark:text-slate-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.lead_service_id && <p className="text-red-500 text-[12px] mt-1">{errors.lead_service_id.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    {...register('message')}
                                    rows={4}
                                    placeholder="Tell us about your project and goals..."
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${
                                        errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                    }`}
                                />
                                {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message.message}</p>}
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy_policy"
                                    {...register('privacy_policy')}
                                    className={`mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary ${
                                        errors.privacy_policy ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                                    }`}
                                />
                                <label htmlFor="privacy_policy" className="font-poppins text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                    I give Leadsnsaas permission to contact me in response to my enquiry. I have read and accept the{' '}
                                    <a href="/privacy-policy" className="text-primary underline hover:opacity-80">
                                        privacy policy
                                    </a>.
                                </label>
                            </div>
                            {errors.privacy_policy && <p className="text-red-500 text-[12px]">{errors.privacy_policy.message}</p>}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-[var(--color-accent)] text-slate-900 font-poppins text-[15px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/30 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : 'Send'}
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={getStartedImg}
                            alt="Professional consultation"
                            className="w-full max-w-lg rounded-2xl object-cover shadow-xl dark:shadow-slate-950/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted

