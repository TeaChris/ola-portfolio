import Image from 'next/image'
import mail from '@/assets/mail.svg'
import phone from '@/assets/phone.svg'
import find from '@/assets/find.svg'
import { BsCaretDownFill, BsCaretRightFill } from 'react-icons/bs'
import Link from 'next/link'

export default function ContactSideBar() {
  return (
    <aside className="w-[16%] h-full border-r border-textMuted flex flex-col items-start gap-0">
      <div className="w-full h-14 flex items-center pl-3 gap-2 border-b border-textMuted">
        <BsCaretDownFill size={17} className="text-white" />
        <h6 className="text-white text-sm">contacts</h6>
      </div>
      <div className="w-full h-24 flex flex-col items-start gap-2 border-b border-textMuted pl-3 pt-3">
        <Link
          className="w-full h-fit flex items-center gap-2"
          href="mailto:olasunkanmiboluwatife110@gmail.com"
        >
          <Image src={mail} alt="mail" className="" />
          <span className="text-sm text-textMuted">mymail@gmail.com</span>
        </Link>
        <div className="w-full h-fit flex items-center gap-2">
          <Image src={phone} alt="mail" className="" />
          <span className="text-sm text-textMuted">+2348146913991</span>
        </div>
      </div>
      <div className="w-full h-12 flex items-start gap-2 border-b border-textMuted pl-3 pt-3">
        <BsCaretDownFill size={17} className="text-white" />
        <h6 className="text-white text-sm">find-me also-on</h6>
      </div>
      <div className="w-full h-fit py-2 flex flex-col items-start gap-2 border-b border-textMuted">
        <Link
          className="w-full h-fit flex items-center gap-2 p-2 bg-transparent hover:bg-textMuted2 rounded-md"
          href=""
        >
          <Image src={find} alt="mail" className="" />
          <span className="text-sm text-textMuted">twitter</span>
        </Link>
        <Link
          className="w-full h-fit flex items-center gap-2 p-2 bg-transparent hover:bg-textMuted2"
          href=""
        >
          <Image src={find} alt="mail" className="" />
          <span className="text-sm text-textMuted">thread</span>
        </Link>
        <Link
          className="w-full h-fit flex items-center gap-2 p-2 bg-transparent hover:bg-textMuted2"
          href=""
        >
          <Image src={find} alt="mail" className="" />
          <span className="text-sm text-textMuted">linkedin</span>
        </Link>
        <Link
          className="w-full h-fit flex items-center gap-2 p-2 bg-transparent hover:bg-textMuted2"
          href=""
        >
          <Image src={find} alt="mail" className="" />
          <span className="text-sm text-textMuted">reddit</span>
        </Link>
      </div>
    </aside>
  )
}
