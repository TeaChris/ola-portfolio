import { VscClose } from 'react-icons/vsc'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { getProjects } from '@/lib/sanity-utils'

interface ProjectsProps {}

export default async function Projects() {
  const projects = await getProjects()
  return (
    <main className="w-[83.1%] h-screen flex flex-col gap-0 overflow-y-scroll pt-9">
      <div className="w-full h-16 border-b-2 border-textMuted2 pt-4">
        <div className="w-48 h-full flex items-center justify-between  px-2 pt-1 border-r-2 border-textMuted2">
          <span className="text-xs text-textMuted">Nextjs; Tailwind</span>
          <VscClose size={17} className="text-textMuted" />
        </div>
      </div>

      {/* projects */}
      <div className="w-full max-w-fit h-fit mt-8 pl-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className="w-72 h-fit bg-transparent flex flex-col gap-2 items-start"
            >
              <div className="w-full h-fit flex gap-2 items-center">
                <h6 className="text-xs text-textPurple capitalize">
                  {project.project}
                </h6>
                <span className="text-xs text-textMuted capitalize">
                  {`// ${project.name}`}
                </span>
              </div>

              <div className="w-full h-fit bg-bgProject flex flex-col items-start gap-3 rounded-md border border-textMuted2 pb-2">
                <Image
                  src={project.image}
                  alt={project.slug}
                  width={570}
                  height={400}
                  className="w-full h-28 object-cover rounded-t-md"
                />
                <div className="w-full h-fit pl-3">
                  <p className="text-xs text-textMuted first-letter:capitalize">
                    {project.description}
                  </p>
                </div>

                <div className="w-full h-fit pl-3">
                  <Link
                    href={project.url}
                    target="_blank"
                    className={buttonVariants({ variant: 'secondary' })}
                  >
                    view-project
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
