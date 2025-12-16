import React from 'react'

const coreValues = [
    {
        number: "1",
        title: "Innovation",
        description: "Our core values form the foundation of who we are, guiding our decisions, actions, and interactions. These principles drive us to deliver excellence, inspire innovation, and create meaningful impact in everything we do."
    },
    {
        number: "2",
        title: "Integrity",
        description: "Honesty, transparency, and ethical practices are at the heart of our operations. We strive to build trust with our users, partners, and team members by ensuring that our platform and processes uphold the highest standards of integrity."
    },
    {
        number: "3",
        title: "Collaboration",
        description: "We understand that the best outcomes are achieved when diverse perspectives come together. Our platform is built to foster collaboration among researchers, entrepreneurs, and businesses, enabling them to work cohesively towards shared goals."
    },
    {
        number: "4",
        title: "Excellence",
        description: "Quality is non-negotiable for us. We are dedicated to delivering an exceptional user experience, ensuring that our platform performs seamlessly and exceeds expectations in every aspect."
    },
    {
        number: "5",
        title: "Empathy",
        description: "Understanding the needs, challenges, and aspirations of our users is essential to us. By putting ourselves in their shoes, we design solutions that genuinely address their pain points and unlock their potential."
    },
    {
        number: "6",
        title: "Sustainability",
        description: "We are committed to creating long-lasting impact, not just through our platform but also by promoting eco-friendly and sustainable practices in our operations and partnerships."
    },
]

const AboutMission = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
                {/* Mission & Vision - Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
                    {/* Our Mission */}
                    <div className="flex-1 space-y-4">
                        <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)]">
                            Our Mission
                        </h2>
                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 text-justify">
                            Our mission is to transform how the world uses research by providing intuitive tools that inspire groundbreaking ideas
                        </p>
                        <ul className="space-y-2 pt-2">
                            <li className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 flex items-start gap-2">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Reduce waste and environmental impact.</span>
                            </li>
                            <li className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 flex items-start gap-2">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Foster a culture of sustainability in East Africa.</span>
                            </li>
                            <li className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 flex items-start gap-2">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Provide a platform where communities can thrive through affordable, quality goods.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Vision */}
                    <div className="flex-1 space-y-4">
                        <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)]">
                            Our Vision
                        </h2>
                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 text-justify">
                            To be the global leader in AI-driven research insights, empowering innovation for a better future. We envision a world where every product finds its rightful owner, where waste is minimized, and where communities are empowered through a thriving marketplace.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="space-y-6">
                    <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)]">
                        Core Values
                    </h2>
                    <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 max-w-3xl">
                        Our core values form the foundation of who we are, guiding our decisions, actions, and interactions. These principles drive us to deliver excellence, inspire innovation, and create meaningful impact in everything we do.
                    </p>

                    {/* Values Grid - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
                        {coreValues.map((value) => (
                            <div key={value.number} className="space-y-5 max-w-sm">
                                <h3 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)]">
                                    {value.number}. {value.title}
                                </h3>
                                <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 text-justify">
                                    {value.description}
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