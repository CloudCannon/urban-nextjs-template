module.exports = {
    _comments: {
      title: 'The title of your page.'
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
    'collections-config': {
      data: { path: 'data' },
      clients: {
        path: 'content/clients',
        "output": true,
        name: 'Clients',
      },
      pages: {
        path: 'content/pages',
        url: '/[slug]',
        "output": true,
        name: 'Pages'
      },
      'staff_members': {
        path: 'content/staff-members',
        _enabled_editors: ['data'],
        name: 'Staff Members'
      },
      posts: {
        path: 'content/posts',
        "output": true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    }
  };