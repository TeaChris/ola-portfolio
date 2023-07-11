import ContactForm from '@/components/ContactForm'
import ContactSideBar from '@/components/ContactSideBar'
import MobileFormHeading from '@/components/MobileFormHeading'
import MobileContactForm from '@/components/MobileContactForm'

export default function page() {
  return (
    <div className="w-full h-fit lg:h-[70rem] mt-8 max-h-max lg:overflow-hidden">
      <div className="hidden w-full h-full lg:flex items-start gap-0">
        <ContactSideBar />
        <ContactForm />
      </div>

      <div className="w-full h-[55rem] flex flex-col items-start gap-0 lg:hidden relative">
        <MobileFormHeading />
        <MobileContactForm />
      </div>
    </div>
  )
}