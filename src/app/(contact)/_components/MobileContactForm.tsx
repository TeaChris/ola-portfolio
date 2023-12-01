'use client'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'
import SuccessModal from '../../../components/SuccessModal'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function MobileContactForm() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const form = useForm<FormValues>()
  // to track the form state with react-hook-form use 👇
  const { register, control, handleSubmit, formState, reset } = form
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log('Submitted', data)

    setTimeout(() => {
      // Show the modal upon successful form submission
      setShowModal(true)
    }, 1000)
    reset() // Reset the form when showModal is true
  }
  return (
    <div className="w-full h-full pl-3 mt-12">
      <form
        className="w-[92%] h-fit flex flex-col items-start gap-3 bg-transparent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full h-fit flex flex-col items-start gap-2">
          <Label htmlFor="name">_name:</Label>
          <Input
            type="name"
            id="name"
            {...register('name', {
              required: 'name is required',
            })}
            placeholder="enter you name"
          />
          <p className="text-rose-500 text-xs">{errors.name?.message}</p>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-2">
          <Label htmlFor="email">_email:</Label>
          <Input
            type="email"
            id="email"
            {...register('email', {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'**+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'invalid email address',
              },
              required: 'email is required',
            })}
            placeholder="enter you email"
          />
          <p className="text-rose-500 text-xs">{errors.email?.message}</p>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-2">
          <Label htmlFor="name">_message:</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            {...register('message', {
              required: 'message is required',
            })}
          />
          <p className="text-rose-500 text-xs">{errors.message?.message}</p>
        </div>
        <Button variant="secondary">submit-message</Button>
      </form>
      <SuccessModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}
