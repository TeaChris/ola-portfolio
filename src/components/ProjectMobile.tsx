import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import { getProjects } from '@/lib/sanity-utils'

export default async function ProjectMobile() {
  const projects = await getProjects()
  return (
    <div className="w-full h-fit mt-20 flex flex-col items-start gap-4">
      <div className="w-full px-3 flex items-center gap-2">
        <h6 className="text-lg text-white capitalize">{'//'}_projects</h6>
        <span className="text-lg text-textMuted2 capitalize">{'/'}all</span>
      </div>

      {/*  */}
      <div className="w-full h-[90rem] flex flex-col items-center gap-6 px-3 pb-4">
        {projects.map((project) => {
          return (
            <div
              key={project._id}
              className="w-[22rem] h-fit bg-transparent flex flex-col gap-2 items-start shadow-textMuted2 shadow-sm"
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
                  className="w-full h-36 object-cover rounded-t-md"
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
    </div>
  )
}
