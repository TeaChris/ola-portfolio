import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'hcxa05jq',
  dataset: 'production',
  title: 'My Portfolio',
  apiVersion: '2023-07-08',
  basePath: '/admin',
  plugins: [deskTool()],
  schema:{types:schemas}
})

export default config
