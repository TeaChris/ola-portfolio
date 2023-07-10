import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-[22rem] lg:w-96 h-fit py-2 lg:h-32 border border-textMuted shadow-md shadow-textMuted flex items-center justify-between top-[10rem] left-18 lg:left-[30rem] absolute px-2">
      <Button variant="secondary">
        <Link
          href="/ola.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          view-resume
        </Link>
      </Button>
      <Button variant="secondary">
        <a href="/ola.pdf" download className="">
          download-resume
        </a>
      </Button>
    </div>
  )
}

export default page
