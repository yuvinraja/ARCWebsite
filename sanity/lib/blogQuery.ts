import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  author->{
    name
  },
  mainImage{
    asset,
    alt
  },
  categories[]->{
    _id,
    title
  },
  publishedAt,
  body,
  excerpt
}`;

export const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  author->{
    name
  },
  mainImage{
    asset,
    alt
  },
  categories[]->{
    _id,
    title
  },
  publishedAt,
  body,
  excerpt
}`;
