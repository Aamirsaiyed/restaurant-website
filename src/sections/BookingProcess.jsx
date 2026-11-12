import React from 'react'
import { bookingSteps, bookingTestimonial } from '../Data/Data'
import { Star } from 'lucide-react'
import Animated from '../Components/Animated'
import { steps } from 'motion'

const BookingProcess = () => {
    return (
        <section id="booking-process" className="px-auto mt-20 md:mt-32">
            <div className='max-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25'>

                <div className='flex flex-col text-center md:text-left'>
                    <Animated delay={0.2}>
                        <span className='text-orange-500 font-medium uppercase mb-4 inline-block'>
                            Table Reservation Process
                        </span>
                    </Animated>
                    <Animated delay={0.2}>
                        <h2 className='text-4xl md:text-5xl mb-16'>
                            Reserve your table in three simple steps
                        </h2>
                    </Animated>
                    <Animated className='flex gap-0.5 mb-6 justify-center md:justify-start'>
                        {
                            [...Array(bookingTestimonial.rating)].map((_, i) => (
                                <Star key={i} className='size-4 fill-orange-500 text-orange-500' />
                            ))
                        }
                    </Animated>
                    <Animated delay={0.2}>
                        <p className='text-zinc-600 max-w-sm max-md:mx-auro mb-4'>
                            "{bookingTestimonial.quote}"
                        </p>
                    </Animated>
                    <Animated className='flex items-center justify-center md:justify-start gap-3'>
                        <img src={bookingTestimonial.authorImg} alt={bookingTestimonial.authorName} className='size-12 rounded-full object-cover' />
                        <span className='text-lg'>{bookingTestimonial.authorName}</span>
                    </Animated>
                </div>

                <div className='space-y-12 text-left'>
                    {bookingSteps.map((steps, index) => {
                        return (
                            <Animated key={index} y={150} delay={index * 0.15} className='flex items-start gap-9'>
                                <span className='text-orange-500 font-medium text-lg shrink-0'>{steps.number}</span>
                                <div className='flex flex-col'>
                                    <h3 className='text-xl mb-4'>{steps.title}</h3>
                                    <p className='text-zinc-600'>{steps.description}</p>
                                </div>
                            </Animated>
                        )
                    })}

                </div>
            </div>

        </section>
    )
}

export default BookingProcess