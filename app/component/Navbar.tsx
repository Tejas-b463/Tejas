import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiLinkedin, SiGithub} from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";

export default function Navbar({ className }: { className: string }) {

  const socials = [
    {
      link: "https://www.linkedin.com/in/tejas-banait/",
      label: "LinkedIn",
      Icon: SiLinkedin
    },
    {
      link: "https://github.com/Tejas-b463",
      label: "Github",
      Icon: SiGithub
    },
     {
      link: "https://drive.google.com/file/d/1SCc5ssWvlddMHPmYEs_GdXpYHg8Ay2Dh/view?usp=sharing",
      label: "Resume",
      Icon: FaFilePdf
    },
    {
      link: "/",
      lable: "Dashboard",
      Icon: RiDashboardFill
    }
  ]
  return (
    <nav className={cn('py-4 flex justify-between items-center', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Tejas 🧑🏻‍💻</h1>

      <div className='flex items-center gap-5'>

        {socials.map((social, index) => {

          const Icon = social.Icon

          return <Link href={social.link} key={index} aria-label={social.label} target='_blank'>
            <Icon className='size-5 hover:scale-125 transition-all' />

          </Link>
        })}
      </div>
    </nav>
  )
}
