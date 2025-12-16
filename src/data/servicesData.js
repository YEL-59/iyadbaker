// Services data - shared across components (like API response)
import hvacImg from '@/assets/hero-img.png'
import constructionImg from '@/assets/faq.png'

export const servicesData = [
    {
        id: 1,
        slug: "hvac-leads",
        title: "HVAC Leads",
        heroImage: hvacImg,
        heroDescription: "We deliver real homeowners in your service area who are actively looking for HVAC installation, repair, or maintenance. Stop wasting money on shared leads — our HVAC leads are 100% exclusive to you.",
        
        // Detail page content
        detailSection: {
            heading: "Turn Heat Into Profit — Get Exclusive HVAC Leads",
            description: "We deliver real homeowners in your service area who are actively looking for HVAC installation, repair, or maintenance. Stop wasting money on shared leads — our HVAC leads are 100% exclusive to you. Whether it's a broken AC in the summer or a furnace repair in winter, we connect you with customers ready to hire.",
            image: hvacImg
        },

        // What You Get section
        whatYouGet: {
            title: "What You Get",
            features: [
                "Verified local homeowner leads",
                "Emergency repair inquiries",
                "Installation & replacement opportunities",
                "Seasonal maintenance leads",
                "Geo-targeted campaigns"
            ],
            image: constructionImg
        },

        // How It Works section
        howItWorks: [
            {
                step: "Step 1",
                title: "Precision Area Targeting",
                description: "We target homeowners in your specific service area using advanced geo-targeting."
            },
            {
                step: "Step 2",
                title: "Data Intake Form",
                description: "Potential customers fill out a detailed form about their HVAC needs."
            },
            {
                step: "Step 3",
                title: "Qualification",
                description: "We verify and qualify each lead to ensure they're ready to hire."
            },
            {
                step: "Step 4",
                title: "Lead Delivery",
                description: "Qualified leads are delivered directly to you in real-time."
            }
        ],

        // FAQ section
        faqs: [
            {
                question: "How much do you charge for HVAC leads?",
                answer: "Our pricing varies based on your service area and lead volume. Contact us for a custom quote tailored to your business needs."
            },
            {
                question: "What types of HVAC services do you cover?",
                answer: "We cover all HVAC services including installation, repair, maintenance, emergency services, and seasonal tune-ups."
            },
            {
                question: "How do I book my appointment?",
                answer: "Once you receive a lead, you can contact the homeowner directly to schedule an appointment at your convenience."
            },
            {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel your subscription at any time with no long-term contracts or hidden fees."
            }
        ]
    },
    {
        id: 2,
        slug: "construction-leads",
        title: "Construction Leads",
        heroImage: constructionImg,
        heroDescription: "Construction Leads for Residential & Commercial Projects. Reach homeowners, developers, and businesses looking for contractors ready for bids.",
        
        detailSection: {
            heading: "Build Your Business — Get Quality Construction Leads",
            description: "Connect with property owners, developers, and businesses actively seeking construction services. From residential renovations to commercial builds, we deliver qualified leads ready to start their projects.",
            image: constructionImg
        },

        whatYouGet: {
            title: "What You Get",
            features: [
                "Residential remodeling & renovation leads",
                "New construction project inquiries",
                "Commercial building & contracting leads",
                "General contractor, roofing, plumbing, and electrical leads",
                "Verified project details"
            ],
            image: hvacImg
        },

        howItWorks: [
            {
                step: "Step 1",
                title: "Project Targeting",
                description: "We identify property owners planning construction projects in your area."
            },
            {
                step: "Step 2",
                title: "Project Details Form",
                description: "Customers provide detailed project requirements and timelines."
            },
            {
                step: "Step 3",
                title: "Lead Verification",
                description: "Each lead is verified for project readiness and budget."
            },
            {
                step: "Step 4",
                title: "Instant Delivery",
                description: "Receive qualified construction leads directly to your inbox."
            }
        ],

        faqs: [
            {
                question: "What types of construction leads do you provide?",
                answer: "We provide leads for residential, commercial, renovation, new builds, and specialty construction projects."
            },
            {
                question: "How are construction leads qualified?",
                answer: "Each lead includes verified project details, budget range, timeline, and contact information."
            },
            {
                question: "Can I specify my service area?",
                answer: "Yes, you can define your exact service area and only receive leads from those locations."
            },
            {
                question: "What's the average project value?",
                answer: "Project values vary, but we focus on serious inquiries with realistic budgets and timelines."
            }
        ]
    },
    {
        id: 3,
        slug: "insurance-leads",
        title: "Insurance Leads",
        heroImage: hvacImg,
        heroDescription: "Connect with homeowners and businesses actively seeking insurance coverage. Get exclusive leads for auto, home, life, and commercial insurance.",
        
        detailSection: {
            heading: "Grow Your Book — Get Exclusive Insurance Leads",
            description: "We connect insurance agents with qualified prospects actively shopping for coverage. From home and auto to life and commercial policies, our leads are verified and ready to discuss their insurance needs.",
            image: hvacImg
        },

        whatYouGet: {
            title: "What You Get",
            features: [
                "Home insurance inquiries",
                "Auto insurance leads",
                "Life insurance prospects",
                "Commercial insurance opportunities",
                "Bundle policy requests"
            ],
            image: constructionImg
        },

        howItWorks: [
            {
                step: "Step 1",
                title: "Demographic Targeting",
                description: "We target prospects based on life events and insurance needs."
            },
            {
                step: "Step 2",
                title: "Quote Request Form",
                description: "Prospects complete detailed forms about their coverage needs."
            },
            {
                step: "Step 3",
                title: "Lead Scoring",
                description: "Each lead is scored based on intent and policy potential."
            },
            {
                step: "Step 4",
                title: "Real-Time Delivery",
                description: "Qualified leads are sent to you instantly for follow-up."
            }
        ],

        faqs: [
            {
                question: "What types of insurance leads do you offer?",
                answer: "We offer leads for home, auto, life, health, and commercial insurance products."
            },
            {
                question: "Are the leads exclusive?",
                answer: "Yes, each lead is sold exclusively to one agent in your area."
            },
            {
                question: "How quickly will I receive leads?",
                answer: "Leads are delivered in real-time as soon as a prospect completes our form."
            },
            {
                question: "Can I filter leads by policy type?",
                answer: "Yes, you can specify which types of insurance leads you want to receive."
            }
        ]
    },
    {
        id: 4,
        slug: "real-estate-leads",
        title: "Real Estate Leads",
        heroImage: constructionImg,
        heroDescription: "Connect with buyers, sellers, and investors actively looking for real estate opportunities in your market.",
        
        detailSection: {
            heading: "Close More Deals — Get Qualified Real Estate Leads",
            description: "We connect real estate agents with motivated buyers, sellers, and investors. Our leads are pre-qualified and ready to make moves in the market, helping you grow your business faster.",
            image: constructionImg
        },

        whatYouGet: {
            title: "What You Get",
            features: [
                "First-time homebuyer leads",
                "Seller listing opportunities",
                "Investment property inquiries",
                "Luxury home buyers",
                "Relocation leads"
            ],
            image: hvacImg
        },

        howItWorks: [
            {
                step: "Step 1",
                title: "Market Analysis",
                description: "We identify active buyers and sellers in your target market."
            },
            {
                step: "Step 2",
                title: "Property Interest Form",
                description: "Prospects share their property preferences and timeline."
            },
            {
                step: "Step 3",
                title: "Motivation Check",
                description: "We verify buyer/seller motivation and financial readiness."
            },
            {
                step: "Step 4",
                title: "Lead Assignment",
                description: "Qualified leads are matched and delivered to your CRM."
            }
        ],

        faqs: [
            {
                question: "Do you provide buyer and seller leads?",
                answer: "Yes, we provide both buyer and seller leads based on your preferences."
            },
            {
                question: "Are leads pre-qualified?",
                answer: "Yes, all leads include information about budget, timeline, and motivation level."
            },
            {
                question: "Can I target specific neighborhoods?",
                answer: "Yes, you can define specific zip codes and neighborhoods for your leads."
            },
            {
                question: "How do you verify lead quality?",
                answer: "We use phone verification and detailed questionnaires to ensure lead quality."
            }
        ]
    },
    {
        id: 5,
        slug: "legal-leads",
        title: "Legal Leads",
        heroImage: hvacImg,
        heroDescription: "Connect with clients actively seeking legal representation for personal injury, family law, criminal defense, and more.",
        
        detailSection: {
            heading: "Grow Your Practice — Get Qualified Legal Leads",
            description: "We connect attorneys with clients who need legal representation now. From personal injury to family law, our leads are verified and actively seeking legal help in your practice areas.",
            image: hvacImg
        },

        whatYouGet: {
            title: "What You Get",
            features: [
                "Personal injury case leads",
                "Family law inquiries",
                "Criminal defense prospects",
                "Estate planning clients",
                "Business law opportunities"
            ],
            image: constructionImg
        },

        howItWorks: [
            {
                step: "Step 1",
                title: "Practice Area Targeting",
                description: "We target prospects based on your specific practice areas."
            },
            {
                step: "Step 2",
                title: "Case Intake Form",
                description: "Prospects complete detailed forms about their legal needs."
            },
            {
                step: "Step 3",
                title: "Case Qualification",
                description: "Each case is reviewed for merit and urgency."
            },
            {
                step: "Step 4",
                title: "Immediate Delivery",
                description: "Qualified legal leads are sent directly to your firm."
            }
        ],

        faqs: [
            {
                question: "What practice areas do you cover?",
                answer: "We cover personal injury, family law, criminal defense, estate planning, business law, and more."
            },
            {
                question: "Are leads exclusive to my firm?",
                answer: "Yes, each lead is exclusive and not shared with competing firms in your area."
            },
            {
                question: "How are cases pre-screened?",
                answer: "We verify contact information, case details, and urgency before delivering leads."
            },
            {
                question: "Can I specify case types?",
                answer: "Yes, you can choose which types of legal cases you want to receive."
            }
        ]
    }
]

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
    return servicesData.find(service => service.slug === slug)
}

// Helper function to get service by id
export const getServiceById = (id) => {
    return servicesData.find(service => service.id === parseInt(id))
}

