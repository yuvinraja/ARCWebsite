// sanity/schemaTypes/showcase.ts

import { defineField, defineType } from 'sanity'

export const showcase = defineType({
  name: 'showcase',
  title: 'Showcase Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'mediaFile',
      title: 'Media File',
      type: 'file',
      options: {
        accept: 'video/*, image/*',
      },
    }),
    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
    }),
  ],
})
