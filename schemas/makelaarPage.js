export default {
  name: 'makelaarPage',
  title: 'MakelaarPage',
  type: 'document',
  fields: [
    {
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'plaatsnaam',
      title: 'Plaatsnaam',
      type: 'string',
      description: 'Voer plaatsnaam in om deze als variabele "plaatsnaam" te kunnen gebruiken op de pagina.' 
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'It is best to keep meta descriptions long enough that they are sufficiently descriptive, so we recommend descriptions between 50 and 160 characters.',
      validation: Rule => Rule.max(160).warning(`A title shouldn't be more than 160 characters.`)
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}]
    },
    
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
