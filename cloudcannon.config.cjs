module.exports = {
    _inputs:{
      title: {
        comment: 'The title of your page.'
      }
    },
    _select_data: {
      categories: ['sales', 'tips', 'marketing', 'growth']
    },
    paths: {
      collections: 'content',
      data: 'data',
      static: 'public',
      uploads: 'public/uploads'
    },
    collections_config: {
      data: { path: 'data' },
      clients: {
        path: 'content/clients',
        url: '/clients/[slug]',
        "output": true,
        name: 'Clients'
      },
      webpages: {
        path: 'content/pages',
        url: '/[slug]',
        "output": true,
        name: 'Pages',
        _icon: 'wysiwyg',
        _enabled_editors: ['visual','content']
      },
      'staff-members': {
        path: 'content/staff-members',
        _enabled_editors: ['data'],
        name: 'Staff Members',
        sort: {
          key: 'name'
        },
        sort_options: [
          {
            key: 'name'
          },
          {
            key: 'name',
            order: 'desc'
          },
          {
            key: 'position',
            label: 'Job Title'
          }
        ],
      },
      posts: {
        path: 'content/posts',
        "output": true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    },
    collection_groups: [
      {
        heading: 'Pages',
        collections: [
          'webpages'
        ]
      },
      {
        heading: 'Blogging',
        collections: [
          'posts',
          'drafts',
          'staff-members'
        ]
      },
      {
        heading: 'Content',
        collections: [
          'clients',
          'data'
        ]
      }
    ]
  };