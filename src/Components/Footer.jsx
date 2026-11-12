import React from 'react'
import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../Data/Data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='px-auto mt-20 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                {/* row */}
                <div className='flex flex-wrap justify-between pb-8'>
                    {/* col-1 - Brand & Socials*/}

                    <div className='flex flex-col items-start text-left mb-4'>

                        <Animated>
                            <img src="/assets/logo.svg" alt="logo" />
                        </Animated>
                        <Animated>
                            <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
                                Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitility every day.
                            </p>
                        </Animated>
                        <div className='flex items-center gap-1.5 mt-6'>
                            {socialLinks.map((item, index) => {
                                return (
                                    <Animated key={index} delay={index * 0.5}>
                                        <a href={item.href} className='size-7.5 rounded-full border border-slate-300 grid place-content-center'>{item.icon}</a>
                                    </Animated>
                                )
                            })}
                        </div>

                    </div>


                    {/* col-2 */}
                    <div>
                        <p className='font-medium mb-5'>Quick Links</p>
                        <div className='flex flex-col gap-2.5'>
                            {quickLinks.map((link, index) => {
                                return (<Animated key={link.name} delay={index * 0.5}>
                                    <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>{link.name}</a>
                                </Animated>
                                )
                            })}
                        </div>
                    </div>

                    {/* col-3 */}

                    <div>
                        <p className='font-medium mb-5'>Get in Touch</p>
                        <div className='space-y-3'>
                            <Animated>
                                <a href="mailto:hello@example.com" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                                    <Mail size={16} className='shrink-0' />
                                    hello@example.com
                                </a>
                            </Animated>
                            <Animated delay={0.2}>
                                <a href="tel:876-589-6540" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                                    <Phone size={16} className='shrink-0' />
                                    876-589-6540
                                </a>
                            </Animated>
                        </div>
                    </div>

                    {/* col-4 */}

                    <div>
                        <p className='font-medium mb-5'>Sitemap</p>
                        <div className='flex flex-col gap-2.5'>
                            {sitemapLinks.map((link, index) => {
                                return (
                                    <Animated key={link.name} delay={index * 0.5}>
                                        <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>{link.name}</a>
                                    </Animated>
                                )
                            })}

                        </div>

                    </div>

                </div>


                {/* boottom Bar */}
                <div className='border-t text-zinc-500 border-stale-200 py-4.5 flex justify-center items-center' >
                    <p>@ 2026. All Right Reserved</p>

                </div>
            </div>

        </footer>
    )
}

export default Footer