import {UserIcon} from '@sanity/icons'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
