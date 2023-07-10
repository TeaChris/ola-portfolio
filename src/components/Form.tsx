'use client'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import SuccessModal from './SuccessModal'
import emailjs from 'emailjs-com'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Form() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const form = useForm<FormValues>()
  // to track the form state with react-hook-form use 👇
  const { register, handleSubmit, formState, reset } = form
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log('Submitted', data)
    // send from
    emailjs
      .sendForm(
        'service_5qx03hm',
        'template_6723pht',
        document.getElementById('my-form') as HTMLFormElement,
        'cSfCB_fQMQ8n04-ZW'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text) // reset form state
          reset()
        },
        // if error occurs
        (error) => {
          console.error('Error sending email:', error.text)
        }
      )

    setTimeout(() => {
      // Show the modal upon successful form submission
      setShowModal(true)
    }, 1000)
    reset() // Reset the form when showModal is true
  }

  return (
    <div className="w-full h-full">
      <form
        id="my-form"
        className="w-96 h-fit flex flex-col items-start gap-3 bg-transparent"
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
