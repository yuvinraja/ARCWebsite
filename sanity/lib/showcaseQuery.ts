// sanity/lib/showcaseQuery.ts
export const showcaseEventsQuery = `*[_type == "showcaseEvent"] | order(date desc) {
  _id,
  title,
  description,
  date,
  location,
  "media": media[]{
    _type,
    _type == "videoItem" => {
      "type": "video",
      alt,
      "videoUrl": video.asset->url,
      "thumbnailUrl": thumbnail.asset->url,
      "thumbnailLqip": thumbnail.asset->metadata.lqip
    },
    _type == "imageItem" => {
      "type": "image", 
      alt,
      "url": asset->url,
      "lqip": asset->metadata.lqip
    }
  }
}`;