
import React from 'react'
import { Link } from 'react-router-dom'
import Animated from '../Components/Animated'
import { Star } from 'lucide-react'

const avatars = [
    '/assets/user-1.jpeg',
    '/assets/user-2.jpeg',
    '/assets/user-3.jpeg',
    '/assets/user-4.jpeg'
]

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-auto bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat text-center">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/30"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">

                <Animated delay={0.2} y={-20} scale={0.95}>
                    <span className="text-sm md:text-lg font-medium tracking-widest text-orange-600">
                        WHERE FLAVOR MEETS ELEGANCE
                    </span>
                </Animated>

                <Animated delay={0.4} y={30} scale={0.95}>
                    <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-medium mt-4 font-urbanist text-zinc-900 text-balance leading-tighter">
                        Crafted for unforgettable dining moments
                    </h1>
                </Animated>

                <Animated delay={0.6} y={30} scale={0.95}>
                    <p className="text-sm md:text-base text-zinc-600 max-w-xl mt-5 leading-relaxed">
                        Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for every celebration.
                    </p>
                </Animated>

                <Animated delay={0.8} y={30} scale={0.95}>
                    <a
                        href="#booking-process"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-3.5 mt-8 rounded-full transition-colors duration-300"
                    >
                        Book a table
                    </a>
                </Animated>

                <Animated
                    delay={1.0}
                    y={30}
                    scale={0.95}
                    className="mt-8 flex flex-wrap items-center justify-center gap-y-3"
                >
                    {/* User Avatars */}
                    <div className="flex -space-x-3 pr-3">
                        {avatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`User ${index + 1}`}
                                className="size-10 rounded-full border-2 border-white object-cover"
                            />
                        ))}
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="size-5 fill-orange-500 text-orange-500"
                                />
                            ))}
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-800 whitespace-nowrap">
                            4.8/5 Rating - 1,200+ Reviews
                        </p>
                    </div>
                </Animated>

            </div>
        </section>
    )
}

export default HeroSection
