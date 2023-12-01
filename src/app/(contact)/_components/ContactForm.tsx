'use client'

import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { VscClose } from 'react-icons/vsc'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { toast } = useToast()

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
          toast({
            variant: 'default',
            title: 'Success!',
            description:
              'Your message was successfully sent, Olasunkanmi will receive your message',
          })
          reset()
        },
        // if error occurs
        (error) => {
          console.error('Error sending email:', error.text)
          toast({
            variant: 'destructive',
            title: 'Error',
            description:
              'An error occurred while trying to send your message, please try again',
          })
        }
      )

    setTimeout(() => {}, 1000)
    reset() // Reset the form when showModal is true
  }
  return (
    <main className="w-[50%] h-screen flex flex-col gap-0 overflow-y-scroll pt-9 border-r-2 border-textMuted2">
      <div className="w-full h-[11%] border-b-2 border-textMuted2 pt-4">
        <div className="w-60 h-full flex items-center justify-between  px-2 pt-1 border-r-2 border-textMuted2">
          <span className="text-xs text-textMuted">Send me a mail</span>
          <VscClose size={17} className="text-textMuted" />
        </div>
      </div>
      <div className="w-full h-[70rem] border-r border-t border-textMuted grid place-items-start pt-12 pl-5 pb-2 relative">
        <div className="w-full h-full">
          <form
            id="my-form"
            className="w-full h-fit flex flex-col items-start gap-3 bg-transparent"
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
                className="w-[80%] h-14"
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
                className="w-[80%] h-14"
              />
              <p className="text-rose-500 text-xs">{errors.email?.message}</p>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-2">
              <Label htmlFor="name">_message:</Label>
              <Textarea
                placeholder="Hi there, I think we need a design system"
                id="message"
                {...register('message', {
                  required: 'message is required',
                })}
                className="w-[80%] h-52"
              />
              <p className="text-rose-500 text-xs">{errors.message?.message}</p>
            </div>
            <Button variant="secondary" className="w-fit h-12 px-2">
              submit-message
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
