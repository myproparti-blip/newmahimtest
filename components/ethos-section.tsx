"use client"

import { AnimatedText } from "./animated-text"
import { Reveal } from "./reveal"

export function EthosSection() {
    return (
        <section className="py-24 lg:py-40 bg-neutral-50">
            <div className="container-custom">
                <Reveal>
                    <div className="mb-5 lg:mb-5">
                        <p className="text-sm lg:text-base font-semibold tracking-widest text-black uppercase mb-6 border-b-2 border-black pb-2 inline-block">
                            <AnimatedText text="Let's Get Together" delay={0.1} />
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight border-b-4 border-black pb-4 inline-block">
                                <AnimatedText text="Our Ethos" delay={0.2} />
                            </h2>

                            <div className="space-y-6 text-neutral-700">
                                <p className="text-base lg:text-lg leading-relaxed">
                                    Our approach to design is distinctly contemporary yet comfortably familiar. At our Studio we do not believe in the saying "A house should look like a house". We enjoy tinkering with texture, colour, light, mass and space to bring what we call <em className="font-semibold">aesthetic functionality</em>.
                                </p>

                                <p className="text-base lg:text-lg leading-relaxed">
                                    Inspired architecture enhances lives! We believe design is the morphogenesis of an idea, for which our greatest inspiration is you! With a collaborative and open work culture, we aspire for a positive social, economic and environmental outcomes.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                         <div className="flex items-start relative" style={{backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
                             <div>
                           <h3 className="text-xl sm:text-2xl lg:text-4xl font-light text-black leading-snug lg:leading-relaxed border-l-4 border-black pl-4 sm:pl-6 py-4 break-words">
                                     <AnimatedText text="Our Mission is to create aesthetically functional spaces inspired by YOU being a one point solution provider by delivering a clutter-free construction experience in terms of quality, professional service and affordability all across the globe." delay={0.3} />
                                 </h3>
                             </div>
                         </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
