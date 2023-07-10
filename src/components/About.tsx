import { FC } from 'react'
import Link from 'next/link'
import { VscClose } from 'react-icons/vsc'
import { buttonVariants } from './ui/button'
import Skills from './Skills'

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="hidden lg:block w-[45.1%] h-full border-r border-zinc-400 flex flex-col gap-0 items-start relative">
      <div className="w-full h-16 border-b border-zinc-400">
        <div className="w-40 h-full flex items-center justify-between  px-2 pt-6 border-r border-zinc-400">
          <span className="text-xs text-textMuted">personal-info</span>
          <VscClose size={17} className="text-textMuted" />
        </div>
      </div>
      {/* middle */}
      <div className="w-full h-fit border-b border-zinc-400 pb-2 mt-3 px-8 flex flex-col items-start gap-2">
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">1.</span>
          <span className="text-xs text-textMuted">{'/**'}</span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">2.</span>
          <span className="text-xs text-textMuted">
            {'* '}I like to craft solid and scalable, frontend Highly skilled
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">3.</span>
          <span className="text-xs text-textMuted">
            * at progressive enhancement, design systems & UI Engineering.
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">4.</span>
          <span className="text-xs text-textMuted">
            * I may not fit the typical profile of a designer sitting
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">5.</span>
          <span className="text-xs text-textMuted">
            * behind an Illustrator artboard, meticulously adjusting pixels.
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">6.</span>
          <span className="text-xs text-textMuted">
            * However, design is my passion. You{"'"}ll find me deeply
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">7.</span>
          <span className="text-xs text-textMuted">
            * engrossed in stylesheets, fine-tuning font sizes, and
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">8.</span>
          <span className="text-xs text-textMuted">
            * contemplating layouts. My dedication lies in crafting seamless
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">9.</span>
          <span className="text-xs text-textMuted">
            * user experiences while keeping up with the latest trends and
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">10.</span>
          <span className="text-xs text-textMuted">
            * aesthetics. When it comes to building JavaScript applications,
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">11.</span>
          <span className="text-xs text-textMuted">
            * I have the right tools and the ability to work independently
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">12.</span>
          <span className="text-xs text-textMuted">
            * with them. My focus is on delivering fast, resilient solutions
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">13.</span>
          <span className="text-xs text-textMuted">
            * that are optimized for scalability and performance.
          </span>
        </div>
        <div className="w-full h-fit flex items-center gap-8">
          <span className="text-xs text-textMuted">14.</span>
          <span className="text-xs text-textMuted">*/</span>
        </div>
      </div>

      {/* skills */}
      <Skills />
    </section>
  )
}

export default About
