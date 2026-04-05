"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text: 'React',
            Icon: SiReact,
        },
        {
            text: 'Node',
            Icon: SiNodedotjs,
        },
        {
            text: 'Express',
            Icon: SiExpress,
        },
        {
            text: 'Mongo DB',
            Icon: SiMongodb,
        },
        {
            text: 'Javascript',
            Icon: SiJavascript,
        },
        {
            text: 'HTML5',
            Icon: SiHtml5,
        },
        {
            text: 'CSS',
            Icon: SiCss,
        },
        {
            text: 'Tailwind ',
            Icon: SiTailwindcss,
        },
        {
            text: 'Git',
            Icon: SiGit,
        },
    ]
    return (
        <div id='skills' className='max-w-5xl mx-auto px-8 pt-14' >
            <Title text="Skills ✨" className='flex flex-col items-center justify-center
            -rotate-6'/>
            <HoverEffect items={skills} />
        </div>
    )
}
