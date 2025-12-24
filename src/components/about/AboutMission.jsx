import React from 'react'
import { useAboutMission, useAboutVision, useCoreValues } from '@/hook/about.hook'

const AboutMission = () => {
    const { data: missionResponse, isLoading: missionLoading } = useAboutMission()
    const { data: visionResponse, isLoading: visionLoading } = useAboutVision()
    const { data: coreValuesResponse, isLoading: coreValuesLoading } = useCoreValues()

    const isLoading = missionLoading || visionLoading || coreValuesLoading

    if (isLoading) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
            </div>
        )
    }

    const mission = missionResponse?.data
    const vision = visionResponse?.data
    const coreValues = coreValuesResponse?.data

    return (
        <section className="bg-background py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto">
                {/* Mission & Vision - Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
                    {/* Our Mission */}
                    <div className="flex-1 space-y-4">
                        <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-slate-900 dark:text-white">
                            Our Mission
                        </h2>
                        <div 
                            className="prose-premium prose-ul:space-y-2 prose-ul:pt-2 prose-ul:list-none prose-ul:p-0 prose-li:relative prose-li:pl-6 prose-li:before:content-['•'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-slate-400 prose-li:before:font-bold"
                            dangerouslySetInnerHTML={{ __html: mission?.description }}
                        />
                    </div>

                    {/* Our Vision */}
                    <div className="flex-1 space-y-4">
                        <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-slate-900 dark:text-white">
                            Our Vision
                        </h2>
                        <div 
                            className="prose-premium"
                            dangerouslySetInnerHTML={{ __html: vision?.description }}
                        />
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="space-y-6">
                    <div 
                        className="prose-premium prose-p:max-w-3xl"
                        dangerouslySetInnerHTML={{ __html: coreValues?.description }}
                    />

                    {/* Values Grid - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
                        {coreValues?.extra?.cards?.map((card, idx) => (
                            <div key={card.key || idx} className="space-y-5 max-w-sm">
                                <h3 className="font-poppins text-[18px] font-bold text-slate-900 dark:text-white">
                                    {(idx + 1).toString().padStart(2, '0')}. {card.title}
                                </h3>
                                <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 dark:text-slate-400 text-justify">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMission
