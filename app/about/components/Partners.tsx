"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { Element, Link, scrollSpy } from "react-scroll";
import { useMediaQuery } from 'usehooks-ts';
import { AboutErasoft, AboutMasterOnline } from "./AboutCompany";
import { AboutPartnerAccounting, AboutPartnerEcommerce, AboutPartnerLM, AboutPartnerMarketplace, AboutPartnerPOS } from "./AboutPartners";

const SECTIONS = [
    {
        id: 'our-company',
        title: 'Perusahaan Kami',
        subsections: [
            {
                id: 'about-masteronline',
                title: 'Tentang Master Online',
                content: <AboutMasterOnline />,
            },
            {
                id: 'about-erasoft',
                title: 'Tentang Erasoft',
                content: <AboutErasoft />,
            },
        ]
    },
    {
        id: 'our-partners',
        title: 'Partner Kami',
        subsections: [
            {
                id: 'partner-marketplace',
                title: 'Marketplace',
                content: <AboutPartnerMarketplace />,
            },
            {
                id: 'partner-ecommerce',
                title: 'E-Commerce',
                content: <AboutPartnerEcommerce />,
            },
            {
                id: 'partner-accounting',
                title: 'Accounting/ERP',
                content: <AboutPartnerAccounting />,
            },
            {
                id: 'partner-pos',
                title: 'Point of Sales (POS)',
                content: <AboutPartnerPOS />,
            },
            {
                id: 'partner-lm',
                title: 'Loyalty Management',
                content: <AboutPartnerLM />,
            },
        ]
    }
]

export default function Partners() {
    const isLG = useMediaQuery('(min-width: 1024px)')
    useEffect(() => {
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    }, []);

    useGSAP(() => {
        if (isLG) return
        gsap.to("#aboutnav", {
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            backgroundColor: 'rgb(255,255,255,0.85)',
            boxShadow: '0 0 20px rgba(0,0,0,0.25)',
            padding: '8px 32px',
            duration: 0.25,
            scrollTrigger: {
                trigger: '#aboutnav',
                start: '0 64px', //trigger, viewport
                // markers: true,
                toggleActions: 'play none none reverse', //onEnter, onLeave, onEnterBack, and onLeaveBack
                toggleClass: {
                    className: 'backdrop-blur-lg',
                    targets: '#aboutnav'
                },
            }
        })
    }, { dependencies: [isLG], revertOnUpdate: true });

    return (
        <Element as="div" name="about-partners" className="bg-white text-black">
            <div className="container mx-auto px-8 py-12 md:py-18 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16 py-32">
                    <div id="aboutnav" className="w-full lg:w-[200px] overflow-x-auto lg:overflow-x-visible beautify-scrollbar sticky top-16">
                        <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col gap-8">
                            {SECTIONS.map(c => {
                                return (
                                    <div key={c.id} className="flex-none flex flex-col gap-4">
                                        <div className="text-slate-600 hidden lg:block">{c.title}</div>
                                        <div className="flex flex-row lg:flex-col gap-4">
                                            {c.subsections.map(c => (
                                                <Link
                                                    key={c.id}
                                                    className="flex-none font-bold cursor-pointer"
                                                    activeClass="text-paprika-900"
                                                    to={c.id}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-120}
                                                    duration={500} >
                                                    {c.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col gap-12 md:gap-18 lg:gap-24">
                        {SECTIONS.map(c => (
                            <div key={c.id} className="flex flex-col gap-12 md:gap-18 lg:gap-24">
                                <div className="flex items-center">
                                    <span className="pr-3 text-black bg-white text-base md:text-xl lg:text-2xl font-bold">{c.title}</span>
                                    <div className="flex-1 border-t-2 border-black"></div>
                                </div>
                                <div className="flex flex-col">
                                    {c.subsections.map(c => (
                                        <Element as="div" key={c.id} name={c.id} className="pb-12 md:pb-18 lg:pb-24 last:pb-0">
                                            {c.content}
                                        </Element>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Element>

    )
}