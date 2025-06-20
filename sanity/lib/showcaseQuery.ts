// sanity/lib/showcaseQuery.ts
import { groq } from 'next-sanity'

export const showcaseQuery = groq`*[_type == "showcase"] | order(_createdAt desc){
  _id,
  title,
  mediaType,
  "mediaUrl": media.asset->url
}`
