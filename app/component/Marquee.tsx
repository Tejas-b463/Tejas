'use client';

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiGithubactions,
} from 'react-icons/si';
import { VscVscodeInsiders } from 'react-icons/vsc';

const skills = [
  { text: 'React', Icon: SiReact },
  { text: 'Node.js', Icon: SiNodedotjs },
  { text: 'Express', Icon: SiExpress },
  { text: 'JavaScript', Icon: SiJavascript },
  { text: 'HTML5', Icon: SiHtml5 },
  { text: 'CSS3', Icon: SiCss3 },
  { text: 'Tailwind CSS', Icon: SiTailwindcss },
];

const tools = [
  { text: 'VS Code', Icon: VscVscodeInsiders },
  { text: 'Git', Icon: SiGit },
  { text: 'Postman', Icon: SiPostman },
  { text: 'MongoDB', Icon: SiMongodb },
  { text: 'Firebase', Icon: SiFirebase },
  { text: 'Vercel', Icon: SiVercel },
  { text: 'GitHub Actions', Icon: SiGithubactions },
];

export default function Skills() {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <div className="w-full space-y-6 overflow-hidden text-white mt-10 md:mt-0">
      {/* Skills (Left to Right) */}
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-flex animate-marquee gap-6">
          {duplicatedSkills.map(({ text, Icon }, index) => (
            <div
              key={`skills-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded min-w-fit"
            >
              <Icon className="text-2xl" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools (Right to Left) */}
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-flex animate-marquee-reverse gap-6">
          {duplicatedTools.map(({ text, Icon }, index) => (
            <div
              key={`tools-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded min-w-fit"
            >
              <Icon className="text-2xl" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
