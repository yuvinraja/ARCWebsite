const showcaseEvent = {
  name: "showcaseEvent",
  title: "Showcase Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "date", title: "Date", type: "date" },
    { name: "location", title: "Location", type: "string" },
    {
      name: "media",
      title: "Media",
      type: "array",
      of: [
        {
          type: "object",
          name: "videoItem",
          title: "Video with Thumbnail",
          fields: [
            {
              name: "video",
              title: "Video File",
              type: "file",
              options: {
                accept: "video/mp4,video/webm",
              },
            },
            {
              name: "thumbnail",
              title: "Thumbnail Image",
              type: "image",
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "alt",
              media: "thumbnail",
            },
          },
        },
        {
          type: "image",
          name: "imageItem",
          title: "Image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default showcaseEvent;
