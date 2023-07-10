import { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'

type SuccessModalProps = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function SuccessModal({
  showModal,
  setShowModal,
}: SuccessModalProps) {
  return (
    <div
      className={`w-full h-full top-0 left-0 absolute bg-body ${
        showModal ? 'visible' : 'invisible'
      }`}
    >
      <div className="w-72 px-1 lg:w-96 h-60 rounded-md top-24 left-16 lg:left-32 absolute bg-body shadow-md shadow-textMuted grid place-items-center">
        <div className="w-full h-fit flex flex-col items-center gap-4">
          <h5 className="text-white text-lg">Thank You!</h5>
          <span className="text-sm text-textMuted text-center">
            Your message has been received, you will receive a response really
            soon
          </span>
          <Button variant="destructive" onClick={() => setShowModal(false)}>
            close modal
          </Button>
        </div>
      </div>
    </div>
  )
}
