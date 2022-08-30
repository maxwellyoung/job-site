import { FaRegMoneyBillAlt } from "react-icons/fa";


export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  icon: FaRegMoneyBillAlt,
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'number',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}