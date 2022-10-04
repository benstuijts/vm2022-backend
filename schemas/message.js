export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Show message from',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'Show message till',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
