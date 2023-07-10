import { StaticImageData } from 'next/image'

export type Project = {
  _id: string
  _createdAt: Date
  name: string
  slug: string
  image: StaticImageData
  url: string
  project: number
  description: string
}
