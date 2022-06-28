export default {
  name: 'house',
  title: 'House',
  type: 'document',
  fields: [
    {
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'adres',
      title: 'Adres',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    },
    {
      name: 'status',
      title: 'Status (0 = te koop, 1 = verkocht onder voorbehoud, 2 = verkocht, 3 = onder bod',
      type: 'number',
      initialValue: 0,
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
      name: 'vraagprijs',
      title: 'Vraagprijs (zonder euroteken)',
      type: 'number',
    },
    {
      name: 'kk',
      title: 'Kosten koper (ja / nee)',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'energielabel',
      title: 'Energielabel',
      type: 'string',
    },
    {
      name: 'bouwjaar',
      title: 'Bouwjaar',
      type: 'number',
    },
    {
      name: 'wonen',
      title: 'Oppervlakte wonen (m2)',
      type: 'number',
    },
    {
      name: 'perceel',
      title: 'Oppervlakte perceel (m2)',
      type: 'number',
    },
    {
      name: 'slaapkamers',
      title: 'Aantal slaapkamers',
      type: 'number',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
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
