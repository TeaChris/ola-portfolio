import Image from 'next/image'
import {
  BsCaretDownFill,
  BsFillCaretRightFill,
  BsChevronDown,
  BsChevronRight,
} from 'react-icons/bs'

import { Balancer } from 'react-wrap-balancer'

export default function AboutMobile() {
  return (
    <div className="w-full h-fit mt-20">
      <div className="h-full w-navContainerWidth flex flex-col items-start gap-5 mx-auto">
        <div className="px-3 w-full">
          <h6 className="text-2xl text-white">_about-me</h6>
        </div>

        <div className="w-full h-fit flex flex-col items-start gap-1">
          <div className="w-full h-fit flex flex-col items-start gap-2">
            <button className="w-full h-14 bg-textMuted2 flex gap-3 items-center px-3">
              <BsFillCaretRightFill size={18} className="text-white" />
              <h6 className="text-white text-lg">personal-info</h6>
            </button>
            <div className="w-full h-fit pl-8 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <BsChevronRight size={18} className="text-textMuted" />
                <Image
                  src="/svg/bio.svg"
                  width={18}
                  height={18}
                  alt="bio"
                  className=""
                />
                <span className="text-sm text-textMuted">bio</span>
              </div>
              <div className="flex items-center gap-2">
                <BsChevronRight size={18} className="text-textMuted" />
                <Image
                  src={'/svg/interest.svg'}
                  width={18}
                  height={18}
                  alt="interest"
                  className=""
                />
                <span className="text-sm text-textMuted">interest</span>
              </div>
              <div className="flex items-center gap-2">
                <BsChevronDown size={18} className="text-white font-bold" />
                <Image
                  src={'/svg/case.svg'}
                  width={18}
                  height={18}
                  alt="profession"
                  className=""
                />
                <span className="text-sm text-textMuted">education</span>
              </div>
              <div className="pl-12 flex items-center gap-2">
                <Image
                  src={'/svg/education.svg'}
                  width={18}
                  height={18}
                  alt="education"
                  className=""
                />
                <span className="text-sm text-textMuted">high-school</span>
              </div>
              <div className="pl-12 flex items-center gap-2">
                <Image
                  src={'/svg/education.svg'}
                  width={18}
                  height={18}
                  alt="education"
                  className=""
                />
                <span className="text-sm text-textMuted">university</span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={18} className="text-white" />
            <h6 className="text-white text-lg">professional-info</h6>
          </div>
          {/* 3 */}
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={18} className="text-white" />
            <h6 className="text-white text-lg">hobbies</h6>
          </div>
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={18} className="text-white" />
            <h6 className="text-white text-lg">contact</h6>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-fit flex flex-col items-start gap-4 px-3">
          <div className="w-full">
            <h6 className="text-xl text-white">
              {'//'} personal-info{' '}
              <span className="text-textMuted2 text-sm font-bold">/ bio</span>
            </h6>
          </div>
          {/* about me */}

          <div className="w-full h-fit">
            <p className="text-textMuted text-lg">
              <Balancer>
                Having three (3) years experience, I like to craft solid and
                scalable frontend product with great user experiences.
              </Balancer>
            </p>
            <br />

            <p className="text-textMuted text-lg">
              <Balancer>
                I may not fit the typical profile of a designer sitting behind
                an Illustrator art-board, meticulously adjusting pixels. However,
                design is my passion. You{"'"}ll find me deeply engrossed in
                stylesheets, fine-tuning font sizes, and contemplating layouts.
                My dedication lies in crafting seamless user experiences while
                keeping up with the latest trends and aesthetics.
              </Balancer>

              <br />
              <br />
            </p>

            <p className="text-textMuted text-lg">
              <Balancer>
                When it comes to building JavaScript applications, I have the
                right tools and the ability to work independently with them. My
                focus is on delivering fast, resilient solutions that are
                optimized for scalability and performance.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
