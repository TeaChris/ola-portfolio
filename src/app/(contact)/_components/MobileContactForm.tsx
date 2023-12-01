'use client'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import emailjs from 'emailjs-com'
import { useToast } from '@/hooks/use-toast'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function MobileContactForm() {
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
    <div className="w-full h-full px-3 mt-12">
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
            className="w-full h-14"
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
            className="w-full h-14"
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
            className="w-full h-52"
          />
          <p className="text-rose-500 text-xs">{errors.message?.message}</p>
        </div>
        <Button variant="secondary" className="w-full h-12 px-2">
          submit-message
        </Button>
      </form>
    </div>
  )
}
