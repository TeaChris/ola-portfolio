import ContactForm from '@/app/(contact)/_components/ContactForm'
import MobileFormHeading from '@/app/(contact)/_components/MobileFormHeading'
import MobileContactForm from '@/app/(contact)/_components/MobileContactForm'
import { BookUser, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function page() {
  return (
    <main className="w-full h-fit lg:h-screen overflow-y-scroll lg:overflow-hidden">
      <div className="hidden w-full lg:flex items-start gap-0 h-full">
        <div className="w-[20%] h-full border-r-2 border-textMuted2 flex flex-col pt-5 items-center gap-0">
          <div className="w-full h-[10%] border-b-2 border-textMuted2 flex items-center justify-start pl-4 pt-7">
            <div className="w-fit h-fit flex items-center gap-2">
              <BookUser className="w-5 h-5 text-white" />
              <h3 className="text-white text-sm">contact-me</h3>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col items-start gap-4 p-4">
            <div className="w-full h-fit flex items-center gap-3">
              <Mail className="w-5 h-5 text-textMuted" />
              <Link
                href={'mailto:olasunkanmiboluwatife110@gmail.com'}
                className="text-textMuted text-base"
              >
                mail-me
              </Link>
            </div>

            <div className="w-full h-fit flex items-center gap-3">
              <Phone className="w-5 h-5 text-textMuted" />
              <Link
                href={'mailto:olasunkanmiboluwatife110@gmail.com'}
                className="text-textMuted text-base"
              >
                +234 814 691 3991
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      <div className="w-full h-[65rem] flex flex-col items-start gap-0 lg:hidden relative">
        <MobileFormHeading />
        <MobileContactForm />
      </div>
    </main>
  )
}
