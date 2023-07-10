import { FC } from 'react'
import Image from 'next/image'
import user from '@/assets/user.svg'
import details from '@/assets/details.svg'
import star from '@/assets/star.svg'

interface CodeSnippetProps {}

const CodeSnippet: FC<CodeSnippetProps> = ({}) => {
  return (
    <section className="hidden w-[38%] h-full lg:flex flex-col gap-0">
      <div className="w-full h-16 border-b border-zinc-400"></div>
      <div className="w-full h-fit flex flex-col items-start gap-8 pl-2 mt-8">
        <div>
          <span className="text-sm text-textMuted2">
            {'//'} code snippet showcase
          </span>
        </div>

        {/* 1 */}
        <div className="w-[30rem] h-fit flex flex-col  items-start gap-3">
          <div className="w-full h-fit flex items-start justify-between">
            <div className="w-fit h-fit flex items-center gap-2">
              <Image src={user} alt="user" className="" />
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs text-textPurple">@username</span>
                <span className="text-xs text-textMuted2">
                  created 5 months ago
                </span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={details} alt="details" className="" />
                <span className="text-xs text-textMuted2">details</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={star} alt="details" className="" />
                <span className="text-xs text-textMuted2">3 stars</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-fit px-1 py-2 flex flex-col items-start gap-1 bg-textBg rounded-md">
            <h6 className="text-xs text-textMuted2">
              <span className="text-textOrange">function</span>{' '}
              InitializeModeChunck
              <span className="text-textPurple">{'<T>'}</span>(chunck:
              ResolvedModeChunck):T{'{'}
            </h6>
            <div className="pl-3">
              <h6 className="text-xs text-textMuted2">
                const value: <span className="text-textOrange">T</span>{' '}
                <span className="text-textPutple">=</span> parseModel(chunk.
                <span className="text-textPurple">_response,</span> chunk.
                <span className="text-textPurple">_value</span>);
              </h6>
            </div>
<div className="pl-3">
            <h6 className="text-xs text-textMuted2">
              <span className="text-textOrange">const</span> initializedChunk:{' '}
              <span className="text-textOrange">InitializedChunk</span>
              <span className="text-textPurple">{'<T>'}</span> = (chunk: any);
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted">
              <span className="text-textPurple">
                initializedChunk._status = INITIALIZED;
              </span>
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted2">
              initializedChunk.<span className="text-textPurple">_value</span> =
              value;
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted">
              return <span className="text-textPurple">value</span>
            </h6>
            </div>
            <h6 className="text-xs text-textMuted">{'}'}</h6>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[30rem] h-fit flex flex-col  items-start gap-3">
          <div className="w-full h-fit flex items-start justify-between">
            <div className="w-fit h-fit flex items-center gap-2">
              <Image src={user} alt="user" className="" />
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs text-textPurple">@username</span>
                <span className="text-xs text-textMuted2">
                  created 5 months ago
                </span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={details} alt="details" className="" />
                <span className="text-xs text-textMuted2">details</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={star} alt="details" className="" />
                <span className="text-xs text-textMuted2">3 stars</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full h-fit px-1 py-2 flex flex-col items-start gap-1 bg-textBg rounded-md">
            <h6 className="text-xs text-textMuted2">
              <span className="text-textOrange">function</span>{' '}
              InitializeModeChunck
              <span className="text-textPurple">{'<T>'}</span>(chunck:
              ResolvedModeChunck):T{'{'}
            </h6>
            <div className="pl-3">
              <h6 className="text-xs text-textMuted2">
                const value: <span className="text-textOrange">T</span>{' '}
                <span className="text-textPutple">=</span> parseModel(chunk.
                <span className="text-textPurple">_response,</span> chunk.
                <span className="text-textPurple">_value</span>);
              </h6>
            </div>
<div className="pl-3">
            <h6 className="text-xs text-textMuted2">
              <span className="text-textOrange">const</span> initializedChunk:{' '}
              <span className="text-textOrange">InitializedChunk</span>
              <span className="text-textPurple">{'<T>'}</span> = (chunk: any);
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted">
              <span className="text-textPurple">
                initializedChunk._status = INITIALIZED;
              </span>
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted2">
              initializedChunk.<span className="text-textPurple">_value</span> =
              value;
            </h6>
            </div>
            <div className="pl-3">
            <h6 className="text-xs text-textMuted">
              return <span className="text-textPurple">value</span>
            </h6>
            </div>
            <h6 className="text-xs text-textMuted">{'}'}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeSnippet
