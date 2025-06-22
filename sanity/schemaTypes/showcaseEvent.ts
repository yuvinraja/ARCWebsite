const showcaseEvent = {
  name: "showcaseEvent",
  title: "Showcase Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Title",
      type: "string",
    },
    {
      name: "description",
      title: "Event Description",
      type: "text",
    },
    {
      name: "media",
      title: "Media",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          type: "file",
          name: "video",
          title: "Video",
          options: {
            accept: "video/mp4,video/webm",
          },
        },
      ],
    },
  ],
}

export default showcaseEvent
