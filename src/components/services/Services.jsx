import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useServices } from '@/hook/service.hook'

const Services = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const perPage = 5
    const [bookingSuccess, setBookingSuccess] = useState(null)

    const { data: response, isLoading, isError } = useServices({
        per_page: perPage,
        page: page
    })

    const services = response?.data?.data || []
    const pagination = response?.data || {}

    const handleBookNow = (service) => {
        const newBooking = {
            id: Date.now().toString(),
            serviceId: service.id,
            serviceTitle: service.name,
            serviceImage: service.image,
            status: 'pending',
            createdAt: new Date().toISOString()
        }

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')

        // Check if already booked
        const alreadyBooked = existingBookings.some(b => b.serviceId === service.id)
        if (alreadyBooked) {
            navigate('/my-bookings')
            return
        }

        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]))

        // Show success message briefly then navigate
        setBookingSuccess(service.name)
        setTimeout(() => {
            setBookingSuccess(null)
            navigate('/my-bookings')
        }, 1000)
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-navbar)]"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="text-center py-20 text-red-500 font-poppins">
                Failed to load services. Please try again later.
            </div>
        )
    }

    return (
        <section className="bg-background py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto">
                {/* Section Header */}
                <h1 className="font-poppins text-[36px] font-bold leading-[1.18] text-slate-900 dark:text-white text-center mb-12">
                    Our All Services
                </h1>

                {/* Services List */}
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className="flex-1">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-lg dark:shadow-slate-950/50"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-5">
                                <h2 className="font-poppins text-[28px] font-bold text-slate-900 dark:text-white">
                                    {service.name}
                                </h2>

                                <div 
                                    className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 dark:text-slate-400 line-clamp-4 prose prose-slate dark:prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                />

                                {service.how_it_works && service.how_it_works.length > 0 && (
                                    <div className="space-y-3">
                                        <h3 className="font-poppins text-[16px] font-bold text-slate-800 dark:text-slate-200">
                                            How It Works
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.how_it_works.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="font-poppins text-[14px] font-normal leading-[22px] text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                                >
                                                    <span className="text-primary mt-0.5">•</span>
                                                    <span><strong className="text-slate-800 dark:text-slate-200">{item.name}:</strong> {item.description}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button
                                        onClick={() => handleBookNow(service)}
                                        className="px-6 py-2.5 bg-primary text-white font-poppins text-[14px] font-semibold rounded-lg hover:opacity-90 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Book Now
                                    </button>
                                    <Link
                                        to="/pricing"
                                        state={{ serviceId: service.id }}
                                        className="px-6 py-2.5 bg-[var(--color-accent)] text-slate-900 font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="px-6 py-2.5 border-2 border-[var(--color-accent)] text-slate-900 dark:text-white font-poppins text-[14px] font-semibold rounded-lg hover:bg-[var(--color-accent)]/10 transition-colors"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {pagination.last_page > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-4">
                        <button
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-800 font-poppins text-[14px] font-medium transition-all hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        
                        <div className="flex items-center gap-2">
                            {[...Array(pagination.last_page)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setPage(i + 1)}
                                    className={`w-10 h-10 rounded-lg font-poppins text-[14px] font-medium transition-all ${
                                        page === i + 1 
                                        ? 'bg-primary text-white' 
                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setPage(prev => Math.min(prev + 1, pagination.last_page))}
                            disabled={page === pagination.last_page}
                            className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-800 font-poppins text-[14px] font-medium transition-all hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {/* Success Toast */}
            {bookingSuccess && (
                <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in z-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-poppins text-[14px] font-medium">{bookingSuccess} added to bookings!</span>
                </div>
            )}
        </section>
    )
}

export default Services
