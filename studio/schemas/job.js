import {FaRegNewspaper} from 'react-icons/fa'

export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
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
        maxLength: 100,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'Client',
      type: 'object',
      fields: [
        {
          title: 'Name',
          name: 'client',
          type: 'reference',
          to: [{type: 'client'}]
        },
        {
          title: 'Contact',
          name: 'contact',
          type: 'number',
          to: [{type: 'client'}]
        }
      ]
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Scheduled', value: 'sci-fi'},
          {title: 'Active', value: 'active'},
          {title: 'Invoicing', value: 'invoicing'},
          {title: 'To priced', value: 'to priced'},
          {title: 'Completed', value: 'completed'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },  
    {
      title: 'Notes',
      name: 'notes',
      type: 'document',
      fields: [
        {
          name: 'notes',
          type: 'text',
          title: 'Notes',
        },
      ],
    }
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     date: 'date',
  //     media: 'poster',
  //   },
  //   prepare(selection) {
  //     const year = selection.date && selection.date.split('-')[0]
  //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

  //     return {
  //       title: `${selection.title} ${year ? `(${year})` : ''}`,
  //       date: selection.date,
  //       media: selection.media,
  //     }
  //   },
  // },
}
