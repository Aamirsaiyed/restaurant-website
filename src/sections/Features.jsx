
import React from 'react'
import Animated from '../Components/Animated'
import { featuresData } from '../data/data'
import { ChefHat, Heart, Leaf } from 'lucide-react'

const iconMap = {
    ChefHat: ChefHat,
    Leaf: Leaf,
    Heart: Heart
}

const Features = () => {

    return (
        <section id="features" className="px-6 md:px-12 lg:px-24 mt-20 md:mt-32 overflow-x-hidden">

            {/* Section Heading */}
            <div className="text-center mb-16">

                <Animated delay={0.2}>
                    <span className="text-orange-500 font-medium uppercase tracking-widest mb-3.5 inline-block">
                        What Sets Us Apart
                    </span>
                </Animated>

                <Animated delay={0.3}>
                    <h2 className="text-4xl md:text-5xl font-medium font-urbanist text-balance max-w-lg mx-auto">
                        Crafting memorable dining experiences
                    </h2>
                </Animated>

            </div>

            {/* Features Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">

                {/* Features List */}
                <div className="flex-1 space-y-10">

                    {featuresData.map((item, index) => {

                        const IconComponent = iconMap[item.icon]

                        return (
                            <Animated
                                key={item.id || index}
                                y={80}
                                delay={index * 0.15}
                                className="flex items-start gap-4 text-left"
                            >

                                {/* Feature Icon */}
                                {IconComponent && (
                                    <div className="shrink-0 mt-1">
                                        <IconComponent
                                            size={24}
                                            strokeWidth={1.8}
                                            className="text-orange-500"
                                        />
                                    </div>
                                )}

                                {/* Feature Details */}
                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-zinc-600 max-w-md leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                            </Animated>
                        )
                    })}

                </div>

                {/* Chef Image */}
                <Animated x={50} y={0} className="w-full md:w-1/2 flex justify-center">

                    <img
                        src="/assets/chef.png"
                        alt="Chef preparing delicious food"
                        className="w-full max-w-md h-[400px] md:h-[450px] object-cover rounded-3xl"
                    />

                </Animated>

            </div>

        </section>
    )
}

export default Features
