'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  BsCaretDownFill,
  BsFillCaretRightFill,
  BsChevronDown,
  BsChevronRight,
} from 'react-icons/bs'

import { Balancer } from 'react-wrap-balancer'

export default function AboutMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className="w-full h-fit mt-20">
      <div className="h-full w-navContainerWidth flex flex-col items-start gap-5 mx-auto">
        <div className="px-3 w-full">
          <h6 className="text-lg text-white">_about-me</h6>
        </div>

        <div className="w-full h-fit flex flex-col items-start gap-1">
          <div className="w-full h-fit flex flex-col items-start gap-2">
            <button
              className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3"
              onClick={handleOpen}
            >
              {isOpen ? (
                <BsCaretDownFill size={17} className="text-white" />
              ) : (
                <BsFillCaretRightFill size={17} className="text-white" />
              )}
              <h6 className="text-white text-lg">personal-info</h6>
            </button>
            <div className="w-full h-fit pl-8 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <BsChevronRight size={17} className="text-textMuted" />
                <Image
                  src="/svg/bio.svg"
                  width={17}
                  height={17}
                  alt="bio"
                  className=""
                />
                <span className="text-xs text-textMuted">bio</span>
              </div>
              <div className="flex items-center gap-2">
                <BsChevronRight size={17} className="text-textMuted" />
                <Image
                  src={'/svg/interest.svg'}
                  width={17}
                  height={17}
                  alt="interest"
                  className=""
                />
                <span className="text-xs text-textMuted">interest</span>
              </div>
              <div className="flex items-center gap-2">
                <BsChevronDown size={17} className="text-white font-bold" />
                <Image
                  src={'/svg/case.svg'}
                  width={17}
                  height={17}
                  alt="profession"
                  className=""
                />
                <span className="text-xs text-textMuted">education</span>
              </div>
              <div className="pl-12 flex items-center gap-2">
                <Image
                  src={'/svg/education.svg'}
                  width={17}
                  height={17}
                  alt="education"
                  className=""
                />
                <span className="text-xs text-textMuted">high-school</span>
              </div>
              <div className="pl-12 flex items-center gap-2">
                <Image
                  src={'/svg/education.svg'}
                  width={17}
                  height={17}
                  alt="education"
                  className=""
                />
                <span className="text-xs text-textMuted">university</span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={17} className="text-white" />
            <h6 className="text-white text-lg">professional-info</h6>
          </div>
          {/* 3 */}
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={17} className="text-white" />
            <h6 className="text-white text-lg">hobbies</h6>
          </div>
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsFillCaretRightFill size={17} className="text-white" />
            <h6 className="text-white text-lg">contact</h6>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-fit flex flex-col items-start gap-4 px-3">
          <div className="w-full">
            <h6 className="text-lg text-white">
              {'//'} personal-info{' '}
              <span className="text-textMuted2">/ bio</span>
            </h6>
          </div>
          {/* about me */}

          <div className="w-full h-fit">
            <p className="text-textMuted text-sm">
              <Balancer>
                Having two (2) years experience, I like to craft solid and
                scalable frontend product with great user experiences.
              </Balancer>
            </p>
            <br />

            <p className="text-textMuted text-sm">
              <Balancer>
                I may not fit the typical profile of a designer sitting behind
                an Illustrator artboard, meticulously adjusting pixels. However,
                design is my passion. You{"'"}ll find me deeply engrossed in
                stylesheets, fine-tuning font sizes, and contemplating layouts.
                My dedication lies in crafting seamless user experiences while
                keeping up with the latest trends and aesthetics.
              </Balancer>

              <br />
              <br />
            </p>

            <p className="text-textMuted text-sm">
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
