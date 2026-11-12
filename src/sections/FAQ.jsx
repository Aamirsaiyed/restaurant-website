
import React, { useState } from 'react'
import Animated from '../Components/Animated'
import { faqs } from '../data/data'
import { Plus, X } from 'lucide-react'

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="px-auto mt-20 md:mt-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center mb-12 md:mb-14">

                    <Animated delay={0.2}>
                        <span className="text-orange-500 font-medium uppercase tracking-widest mb-3 inline-block">
                            FAQs
                        </span>
                    </Animated>

                    <Animated delay={0.3}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-urbanist text-balance">
                            Frequently Asked Questions
                        </h2>
                    </Animated>

                </div>

                {/* FAQ List */}
                <div className="space-y-3">

                    {faqs.map((faq, index) => (

                        <Animated key={index} y={30} delay={index * 0.1}>

                            <details
                                open={openIndex === index}
                                onToggle={(e) => {
                                    if (e.currentTarget.open) {
                                        setOpenIndex(index)
                                    }
                                }}
                                className="group border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors duration-300 open:border-orange-200"
                            >

                                <summary
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleToggle(index)
                                    }}
                                    className="flex justify-between items-center gap-4 p-4 sm:p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden"
                                >

                                    <span className="text-zinc-800 font-medium text-sm sm:text-base">
                                        {faq.question}
                                    </span>

                                    <span className="size-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-orange-100 group-open:text-orange-500">

                                        <Plus size={16} className="group-open:hidden" />

                                        <X size={16} className="hidden group-open:block" />

                                    </span>

                                </summary>

                                <div className="px-4 sm:px-5 pb-5">
                                    <p className="text-sm sm:text-base text-zinc-500 leading-7 border-t border-slate-100 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>

                            </details>

                        </Animated>

                    ))}

                </div>

            </div>
        </section>
    )
}

export default FAQ
