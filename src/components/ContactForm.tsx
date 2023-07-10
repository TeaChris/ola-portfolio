import { VscClose } from 'react-icons/vsc'
import Form from './Form'

export default function ContactForm() {
  return (
    <main className="w-[40%] h-full flex flex-col items-start gap-0">
      <div className="w-40 h-14 flex items-center justify-between px-3 gap-2 border-r border-textMuted">
        <span className="text-white text-sm">contacts</span>
        <VscClose size={17} className="text-textMuted" />
      </div>
      <div className="w-full h-[70rem] border-r border-t border-textMuted grid place-items-start pt-12 pl-5 pb-2 relative">
        <Form />
      </div>
    </main>
  )
}
