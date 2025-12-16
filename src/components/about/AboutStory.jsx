import React from 'react'
// Add your story image to assets folder and update the import
import storyImg from '@/assets/faq.png'

const AboutStory = () => {
    return (
        <section className="bg-[#E8F1FD] py-16 px-4">
            <div className="container mx-auto">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Content */}
                    <div className="space-y-5 max-w-4xl">
                        {/* Heading: Poppins, 36px, 700, line-height 118% */}
                        <h2 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)]">
                            Our Story
                        </h2>

                        {/* Text: Poppins, 16px, 400, line-height 25px */}
                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600">
                            Founded by researchers and entrepreneurs, we realized the immense potential of aligning academic brilliance with real-world needs. That's why we built, a platform designed to bridge the gap between ideas and impact. Was born out of a simple yet powerful idea.
                        </p>

                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600">
                            To give everyday items a second life while promoting sustainability and reducing waste. Derived from the Swahili word SOKO, meaning "market," and ROAM, symbolizing exploration, our platform creates a virtual marketplace where users can roam freely, discovering and trading second-hand treasures.
                        </p>

                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600">
                            Founded with a vision to connect communities across East Africa, SOKO-ROAM aims to make trading pre-loved goods simple, accessible, and impactful for everyone.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={storyImg}
                            alt="Our story"
                            className="w-full max-w-full aspect-[652/458] rounded-xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutStory