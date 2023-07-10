import Link from 'next/link'
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs'
import { Button } from './ui/button'
import find from '@/assets/find.svg'
import Image from 'next/image'

export default function MobileFormHeading() {
  return (
    <div className="w-full h-fit mt-8 flex flex-col py-2 items-start gap-3">
      <div className="w-full px-3">
        <h6 className="text-lg text-white">_contact</h6>
      </div>
      <div className="w-full h-fit p-1 flex flex-col items-start gap-1">
        <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
          <BsCaretRightFill size={17} className="text-white" />
          <h6 className="text-white text-lg">contact</h6>
        </div>
        <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
          <BsCaretDownFill size={17} className="text-white" />
          <h6 className="text-white text-lg">find-me-also-on</h6>
        </div>
      </div>
      <div className="w-full h-fit items-start gap-2 flex flex-col pl-6">
        <Link href="" className="">
          <Button variant="ghost" className='w-full flex items-center gap-2'>
            <Image src={find} alt="find" />
            <span className='text-sm text-textMuted'>+234 814 691 3991</span>
          </Button>
        </Link>
        <Link href="" className="">
          <Button variant="ghost" className='w-full flex items-center gap-2'>
            <Image src={find} alt="find" />
            <span className='text-sm text-textMuted'>twitter</span>
          </Button>
        </Link>
        <Link href="" className="">
          <Button variant="ghost" className='w-full flex items-center gap-2'>
            <Image src={find} alt="find" />
            <span className='text-sm text-textMuted'>thread</span>
          </Button>
        </Link>
        <Link href="" className="">
          <Button variant="ghost" className='w-full flex items-center gap-2'>
            <Image src={find} alt="find" />
            <span className='text-sm text-textMuted'>linkedin</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
