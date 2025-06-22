// lib/sanityFetch.ts
import { client } from "@/sanity/lib/client"
import { showcaseEventQuery } from "@/sanity/lib/showcaseQuery"

export async function getShowcaseEvent(title: string) {
  const query = showcaseEventQuery
  return await client.fetch(query, { title })
}
