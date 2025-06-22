// lib/queries.ts
export const showcaseEventQuery = `*[_type == "showcaseEvent" && title == $title][0]{
  title,
  description,
  "media": media[]{
    ...,
    asset->{
      url,
      _type
    }
  }
}`
