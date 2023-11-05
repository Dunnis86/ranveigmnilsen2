const gallery = {
  name: "gallery",
  title: "Gallery",  
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      type: "slug",
      title: "Slug",
      name: "slug",
      options: { source: "title" }
      },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Dimensions",
      name: "dimensions",
      type: "string"
    },
    {
      title: "Artist",
      name: "author",
      type: "string",
      to: [{type: "galleri"}]
    }
  ]
}

export default gallery;