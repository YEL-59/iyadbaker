import React from 'react'
// Add your about hero image to assets folder and update the import
import aboutImg from '@/assets/faq.png'

const stats = [
    {
        value: "5,910+",
        description: "Customers are using & it's growing everyday"
    },
    {
        value: "240+",
        description: "UI blocks that helps you to build rapid website"
    },
    {
        value: "5,910+",
        description: "Customers are using & it's growing everyday"
    },
    {
        value: "240+",
        description: "UI blocks that helps you to build rapid website"
    },
]

const AboutHero = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Image */}
                    <div>
                        <img
                            src={aboutImg}
                            alt="Team collaboration in modern office"
                            className="w-full max-w-full aspect-[652/458] rounded-xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {/* Heading: Poppins, 36px, 700, line-height 118% */}
                        <h1 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)]">
                            We merge research excellence with market intelligence to empower ideas that change the world
                        </h1>

                        {/* Paragraph: Poppins, 16px, 400, line-height 25px */}
                        <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600">
                            Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.Clarity gives you the blocks & components you need to create a truly website, landing page or admin panel for your SaaS.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <p className="font-inter text-[28px] font-bold leading-[38px] tracking-[-0.5px] text-[var(--color-navbar)]">
                                        {stat.value}
                                    </p>
                                    <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-500 max-w-[200px] mt-2 border-l-2 border-slate-300 pl-3">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero