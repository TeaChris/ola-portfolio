import Link from 'next/link'
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default function MobileFormHeading() {
  return (
    <div className="w-full h-fit flex flex-col py-2 items-start gap-3 mt-10">
      <div className="w-full px-3 mt-14">
        <h6 className="text-2xl text-white">_contact</h6>
      </div>
      <div className="w-full h-fit p-1 flex flex-col items-start gap-1">
        <div className="w-full h-14 bg-textMuted2 flex gap-3 items-center px-3">
          <BsCaretRightFill size={18} className="text-white" />
          <h6 className="text-white text-lg">contact</h6>
        </div>
        <div className="w-full h-14 bg-textMuted2 flex gap-3 items-center px-3">
          <BsCaretDownFill size={18} className="text-white" />
          <h6 className="text-white text-lg">find-me-also-on</h6>
        </div>
      </div>
      <div className="w-full h-fit items-start gap-2 flex flex-col pl-6">
        <Link href="" className="">
          <Button variant="ghost" className="w-full flex items-center gap-2">
            <ExternalLink className="text-base text-textMuted" />
            <span className="text-base text-textMuted">+234 814 691 3991</span>
          </Button>
        </Link>
        <Link href="" className="">
          <Button variant="ghost" className="w-full flex items-center gap-2">
            <ExternalLink className="text-base text-textMuted" />
            <span className="text-base text-textMuted">twitter</span>
          </Button>
        </Link>
        <Link href="" className="">
          <Button variant="ghost" className="w-full flex items-center gap-2">
            <ExternalLink className="text-base text-textMuted" />
            <span className="text-base text-textMuted">linkedin</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
