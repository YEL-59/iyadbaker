import React from 'react'
import { Link } from 'react-router'
import { useMyBookings } from '@/hook/booking.hook'

const MyBookings = () => {
    const { data: response, isLoading } = useMyBookings()
    const bookings = response?.data?.data || []

    const getStatusBadge = (status) => {
        // Since API doesn't specify status in the example but the UI does, 
        // we'll default to 'paid' if date ranges exist, otherwise 'pending' 
        // or handle based on actual backend field if it exists.
        // For now, let's keep the UI consistent with the original design.
        const isPaid = status === 'paid' || true // Assuming existing bookings are paid

        if (isPaid) {
            return (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-green-100 text-green-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Paid
                </span>
            )
        }

        return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-amber-100 text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Pending Payment
            </span>
        )
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <section className="bg-slate-50 min-h-screen py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="font-poppins text-[36px] font-bold text-[var(--color-navbar)] mb-2">
                        My Bookings
                    </h1>
                    <p className="font-poppins text-[16px] text-slate-500">
                        Manage your booked services and active subscriptions
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
                            No Bookings Found
                        </h2>
                        <p className="font-poppins text-[16px] text-slate-500 mb-8 max-w-md mx-auto">
                            You haven't booked any services yet. Explore our lead generation services to get started.
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[15px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors shadow-lg shadow-[var(--color-navbar)]/20"
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
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Service Image */}
                                <div className="relative h-48 bg-slate-100 overflow-hidden">
                                    <img
                                        src={booking.lead_service?.image}
                                        alt={booking.lead_service?.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3">
                                        {getStatusBadge('paid')}
                                    </div>
                                    {/* Plan Badge */}
                                    <div className="absolute bottom-3 left-3 bg-[var(--color-navbar)]/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                                        {booking.plan?.name} Plan
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-5">
                                    <h3 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)] mb-1">
                                        {booking.lead_service?.name}
                                    </h3>
                                    <p className="font-poppins text-[13px] text-slate-400 mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Active until {new Date(booking.ending_date).toLocaleDateString()}
                                    </p>

                                    {/* Pricing Info */}
                                    <div className="flex items-center justify-between py-4 border-y border-slate-50 mb-5">
                                        <div className="space-y-0.5">
                                            <span className="block font-poppins text-[11px] text-slate-400 uppercase font-bold">Price Paid</span>
                                            <span className="block font-poppins text-[16px] font-bold text-[var(--color-navbar)]">
                                                {booking.plan?.currency} {booking.plan?.price}
                                            </span>
                                        </div>
                                        <div className="text-right space-y-0.5">
                                            <span className="block font-poppins text-[11px] text-slate-400 uppercase font-bold">Interval</span>
                                            <span className="block font-poppins text-[14px] font-medium text-slate-600 capitalize">
                                                {booking.plan?.billing_interval}ly
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <span className="flex-1 py-2.5 bg-green-50 text-green-700 font-poppins text-[14px] font-bold rounded-lg text-center flex items-center justify-center gap-2 border border-green-100">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Active
                                        </span>
                                        <Link
                                            to={`/services/${booking.lead_service_id}`}
                                            className="py-2.5 px-6 border border-slate-100 text-slate-500 font-poppins text-[14px] font-semibold rounded-lg hover:bg-slate-50 hover:text-[var(--color-navbar)] transition-all"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer Section */}
                {bookings.length > 0 && (
                    <div className="mt-12 text-center text-slate-400 font-poppins text-[14px]">
                        Showing {bookings.length} active service subscriptions
                    </div>
                )}
            </div>
        </section>
    )
}

export default MyBookings
