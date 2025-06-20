import React from 'react'
import { SiFirebase, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiReact, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
         {
            title: 'Book Review Platform',
            tech: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
            link: 'https://book-review-platform-fawn.vercel.app/',
            cover: '/bookreview.png',
            background: "bg-green-500"
        },
        {
            title: 'Shoppi Ecommerce Platform',
            tech: [SiReact, SiTailwindcss, SiRedux, SiFirebase],
            link: 'https://shoppi-e-commerce.vercel.app/',
            cover: '/shop1.png',
            background: "bg-indigo-500"
        },
        {
            title: 'SoftSell',
            tech: [SiNextdotjs, SiTailwindcss, SiShadcnui],
            link: 'https://soft-sell-rho.vercel.app',
            cover: '/softsell.png',
            background: "bg-cyan-500"
        },
        {
            title: 'Interview AI Coach',
            tech: [SiNextdotjs, SiTypescript, SiShadcnui, SiOpenai],
            link: 'https://catalyst-rust.vercel.app',
            cover: '/interviewcoach.png',
            background: "bg-fuchsia-500"
        }
    ]
    return (
        <div id='projects' className='mt-12 p-5 sm:p-0'>
            <Title text="Projects 🎨" className='flex flex-col items-center justify-center
            rotate-6'/>

            <div className='grid grid-cols-1 sm:grid-cols-2 mt-10
            gap-5'>
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index} target="_blank">
                        <div className={cn("p-3 rounded-sm", project.background)}>
                            <DirectionAwareHover
                                imageUrl={project.cover} className='w-full space-y-5
                                cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className='size-8' key={index} />
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>

                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
