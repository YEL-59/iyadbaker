import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { servicesData } from '@/data/servicesData'

const MyBookings = () => {
    const [bookings, setBookings] = useState([])

    // Load bookings from localStorage
    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        setBookings(savedBookings)
    }, [])

    // Get service details by slug
    const getServiceDetails = (slug) => {
        return servicesData.find(s => s.slug === slug)
    }

    // Remove booking
    const removeBooking = (bookingId) => {
        const updatedBookings = bookings.filter(b => b.id !== bookingId)
        setBookings(updatedBookings)
        localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    }

    const getStatusBadge = (status) => {
        switch (status) {
            case 'paid':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-green-100 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Paid
                    </span>
                )
            case 'pending':
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-amber-100 text-amber-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        Pending Payment
                    </span>
                )
        }
    }

    return (
        <section className="bg-slate-50 min-h-screen py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="font-poppins text-[36px] font-bold text-[var(--color-navbar)] mb-2">
                        My Bookings
                    </h1>
                    <p className="font-poppins text-[16px] text-slate-500">
                        Manage your booked services and complete payments
                    </p>
                </div>

                {bookings.length === 0 ? (
                    /* Empty State */
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 text-center py-20 px-6">
                        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h2 className="font-poppins text-[24px] font-bold text-slate-700 mb-2">
                            No Bookings Yet
                        </h2>
                        <p className="font-poppins text-[16px] text-slate-500 mb-8 max-w-md mx-auto">
                            You haven't booked any services yet. Browse our services and add them to your bookings.
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Browse Services
                        </Link>
                    </div>
                ) : (
                    /* Bookings Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => {
                            const service = getServiceDetails(booking.serviceSlug)
                            return (
                                <div
                                    key={booking.id}
                                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group"
                                >
                                    {/* Service Image */}
                                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                                        <img
                                            src={booking.serviceImage || service?.heroImage}
                                            alt={booking.serviceTitle || service?.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Status Badge */}
                                        <div className="absolute top-3 right-3">
                                            {getStatusBadge(booking.status)}
                                        </div>
                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeBooking(booking.id)}
                                            className="absolute top-3 left-3 w-8 h-8 bg-white/90 hover:bg-red-50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm"
                                            title="Remove booking"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5">
                                        <h3 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)] mb-2">
                                            {booking.serviceTitle || service?.title}
                                        </h3>
                                        
                                        <p className="font-poppins text-[13px] text-slate-500 mb-4">
                                            Booked on {new Date(booking.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </p>

                                        {/* Booking ID */}
                                        <div className="flex items-center justify-between py-3 border-t border-slate-100 mb-4">
                                            <span className="font-poppins text-[12px] text-slate-400">Booking ID</span>
                                            <span className="font-poppins text-[12px] font-mono text-slate-600">#{booking.id.slice(-8)}</span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            {booking.status === 'pending' ? (
                                                <Link
                                                    to="/pricing"
                                                    className="flex-1 py-2.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-center flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                    </svg>
                                                    Pay Now
                                                </Link>
                                            ) : (
                                                <span className="flex-1 py-2.5 bg-green-100 text-green-700 font-poppins text-[14px] font-semibold rounded-lg text-center flex items-center justify-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Payment Complete
                                                </span>
                                            )}
                                            <Link
                                                to={`/services/${booking.serviceSlug}`}
                                                className="py-2.5 px-4 border border-slate-200 text-slate-600 font-poppins text-[14px] font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Summary Section */}
                {bookings.length > 0 && (
                    <div className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h3 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)] mb-1">
                                    Booking Summary
                                </h3>
                                <p className="font-poppins text-[14px] text-slate-500">
                                    {bookings.length} service{bookings.length > 1 ? 's' : ''} booked • {bookings.filter(b => b.status === 'pending').length} pending payment
                                </p>
                            </div>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add More Services
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MyBookings
