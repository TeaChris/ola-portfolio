import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-[50rem] lg:h-screen overflow-y-hidden">
      <MaxWidthWrapper className="h-full flex items-center gap-[5%] pl-2 relative overflow-hidden">
        <div className="w-full h-fit py-0 lg:py-2 lg:w-1/2 flex flex-col items-start gap-16">
          <div className="w-full h-full flex flex-col items-start gap-2 relative">
            <h6 className="text-lg text-slate-400">Hi there👋, I am</h6>
            <h2 className="text-6xl lg:text-4xl leading-2 text-white">
              Boluwatife Olasunkanmi
            </h2>
            <span className="text-lg text-textPurple">
              {'> '}
              Frontend & UX Engineer (Software Engineer)
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
              <Link
                href={'https://github.com/TeaChris'}
                target="_blank"
                className="text-xs text-textOrange underline"
              >
                https://github.com/TeaChris
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -z-20 top-0 transform-gpu overflow-hidden blur-3xl sm:top-5"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="-z-20 relative left-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-0 sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl -z-20"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-20 -z-20 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-20 sm:w-[72.1875rem]"
            />
          </div>

          <Image
            src="/bg.svg"
            alt="bg"
            aria-hidden="true"
            className="w-full h-[80%] object-cover z-20 object-cover"
            width={200}
            height={200}
          />

          <Link href={''} className="w-[80%] h-[80%] z-50" target="_blank">
            <Image
              src={'/s.png'}
              alt="snake game"
              className="w-96 aspect-square top-60 left-20 absolute object-cover z-[100]"
              width={400}
              height={400}
            />
          </Link>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
