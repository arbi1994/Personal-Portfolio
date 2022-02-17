export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
      required: true,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: "link",
      title: "External Link",
      type: "array",
      of: [{ type: 'projectLink'}]
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: 'projectImage' }]
    }
  ]
}