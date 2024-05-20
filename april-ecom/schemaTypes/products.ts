export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Product',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Pruduct Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
