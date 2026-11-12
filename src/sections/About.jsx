
import React from 'react'
import Animated from '../Components/Animated'

const About = () => {
    return (
        <section id="about" className="px-auto mt-20 md:mt-32 scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-18 max-w-7xl mx-auto">

                {/* Left Side: Image */}
                <Animated className="w-full flex-1 min-w-0" y={0} scale={0.8}>
                    <img
                        src="/assets/about.png"
                        alt="Dish"
                        className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover rounded-3xl"
                    />
                </Animated>

                {/* Right Side: Content */}
                <div className="w-full flex-1 min-w-0">

                    <Animated y={0} scale={0.8} className="flex items-center gap-2">
                        <img src="/assets/iconL.png" alt="" />
                        <span>Crafted with Passion</span>
                        <img src="/assets/iconR.png" alt="" />
                    </Animated>

                    <Animated y={0} scale={0.8}>
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium font-urbanist text-balance leading-tight">
                            Experience dining beyond expectations
                        </h2>
                    </Animated>

                    <Animated delay={0.2}>
                        <p className="mt-4 text-zinc-600 max-w-sm leading-relaxed">
                            We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.
                        </p>
                    </Animated>

                    {/* Location Card */}
                    <Animated
                        className="mt-8 sm:mt-9 bg-orange-500 text-white p-2 pr-5 sm:pr-8 rounded-lg flex items-center gap-3 w-fit max-w-full"
                    >
                        <img
                            alt=""
                            className="size-14 sm:size-15 rounded-lg object-cover shrink-0"
                            src="/assets/about.png"
                        />

                        <div className="flex flex-col gap-2 min-w-0">
                            <p className="font-medium">Bistro Royale, NY</p>
                            <a href="#" className="text-sm underline">
                                View on Map
                            </a>
                        </div>
                    </Animated>

                </div>
            </div>
        </section>
    )
}

export default About
