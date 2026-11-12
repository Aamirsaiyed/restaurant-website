
import React, { useState } from 'react'
import Animated from '../Components/Animated'
import { dishes } from '../Data/Data'
import { motion } from 'motion/react'

const Dishes = () => {

    const [rotate, setRotate] = useState({})

    // Handle image rotation on hover
    const handleMouseEnter = (index) => {
        setRotate((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) + 360
        }))
    }

    return (
        <section id="dishes" className="px-6 mt-20 md:mt-32 scroll-mt-24">

            {/* Section Heading */}
            <div className="text-center mb-16">

                <Animated delay={0.2}>
                    <span className="text-orange-500 font-medium uppercase tracking-widest mb-3.5 inline-block">
                        Chef's Signature Selection
                    </span>
                </Animated>

                <Animated>
                    <h2 className="text-4xl md:text-5xl font-medium font-urbanist text-balance max-w-lg mx-auto">
                        Discover our signature dishes
                    </h2>
                </Animated>

            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto">

                {dishes.map((dish, index) => (

                    <Animated
                        key={dish.id || index}
                        y={80}
                        delay={index * 0.1}
                        className="flex flex-col items-center text-center shrink-0 cursor-pointer"
                    >

                        {/* Dish Image */}
                        <motion.div
                            onMouseEnter={() => handleMouseEnter(index)}
                            animate={{
                                rotate: rotate[index] || 0
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 80,
                                damping: 15
                            }}
                        >
                            <img
                                src={dish.img}
                                alt={dish.title}
                                className="size-30 md:size-35 object-cover"
                            />
                        </motion.div>

                        {/* Dish Details */}
                        <h3 className="mt-5 font-medium text-lg">
                            {dish.title}
                        </h3>

                        <p className="mt-2 text-zinc-600">
                            {dish.price}
                        </p>

                    </Animated>

                ))}

            </div>

        </section>
    )
}

export default Dishes
