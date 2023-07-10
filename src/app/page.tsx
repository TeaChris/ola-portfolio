import Image from 'next/image'
import code from '@/assets/code.png'

export default function Home() {
  return (
    <main className="w-screen h-[50rem] lg:h-screen overflow-y-hidden">
      <div className="mx-auto w-navContainerWidth mt-0 lg:mt-3 h-full flex items-center gap-[5%] pl-0 lg:px-40 relative overflow-hidden">
        <div className="w-full h-fit py-0 lg:py-2 lg:w-1/2 flex flex-col items-start gap-16">
          <div className="w-full h-full flex flex-col items-start gap-2 relative">
            <h6 className="text-lg lg:text-sm text-slate-400">
              Hi there👋, I am
            </h6>
            <h2 className="text-6xl lg:text-4xl leading-2 text-white">
              Boluwatife Olasunkanmi
            </h2>
            <span className="text-lg text-textPurple">
              {'> '}
              Frontend Developer & UX Engineer
            </span>

            <div className="block lg:hidden left-12 top-[50%] absolute w-[80%] h-[70%] bg-gradient-to-b from-textGreen to-body blur-3xl"></div>
          </div>

          <div className="w-full items-start gap-3 flex flex-col">
            <span className="text-xs text-textMuted">
              {'// you are gonna enjoy this😊😍'}
            </span>
            <span className="text-xs text-textMuted">
              {'// complete the game to continue👉'}
            </span>
            <span className="text-xs text-textMuted">
              {'// you can also see my github page👇'}
            </span>
            <div className="w-full flex items-center gap-3">
              <span className="text-sm text-textPurple">const</span>
              <span className="text-sm text-textGreen">githubLink</span>
              <span className="text-sm text-slate-100">=</span>
              <span className="text-xs text-textOrange">
                https://github.com/TeaChris
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full h-full lg:w-[45%] mt-16 overflow-y-hidden relative bg-gradient-to-b from-textGreen to-body blur-3xl"></div>
        <Image
          src={code}
          alt="code"
          className="hidden lg:block w-[27rem] object-cover top-2 right-40 opacity-20 absolute"
        />
        <Image
          src={code}
          alt="code"
          className="hidden lg:block w-[27rem] object-cover top-[9.5rem] right-40 opacity-30 absolute"
        />
        <Image
          src={code}
          alt="code"
          className="hidden lg:block w-[27rem] object-cover bottom-[-3rem] right-40 opacity-20 absolute"
        />
        <Image
          src={code}
          alt="code"
          className="hidden lg:block w-[27rem] object-cover bottom-24 right-40 opacity-30 absolute"
        />
        <Image
          src={code}
          alt="code"
          className="hidden lg:block w-[27rem] object-cover bottom-60 right-40 opacity-50 absolute"
        />
      </div>
    </main>
  )
}
