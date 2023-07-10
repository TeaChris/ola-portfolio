import { Project } from '@/types/Project'
import { createClient, groq } from 'next-sanity'

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'hcxa05jq',
    dataset: 'production',
    apiVersion: '2023-07-08',
  })

  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            project,
            description,
        }`
  )
}
