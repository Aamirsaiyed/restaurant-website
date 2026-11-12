import React from 'react'
import { statsData } from '../Data/Data'
import Animated from '../Components/Animated'

const Stats = () => {
    return (
        <section id="stats" className="px-auto mt-20 md:mt-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-25 max-w-7xl mx-auto">

                {statsData.map((stat, index) => (
                    <Animated key={index} y={0} scale={0.8} delay={0.2} className="flex flex-col items-center text-center">
                        <span className="text-6xl">{stat.number}</span>
                        <h3 className="mt-5 text-2xl font-medium font-urbanist text-balance leading-tight">
                            {stat.title}
                        </h3>
                        <p className="text-zinc-600 max-w-72 font-light text-center mt-3.5">
                            {stat.description}
                        </p>
                    </Animated>
                ))}

            </div>

        </section>
    )
}

export default Stats