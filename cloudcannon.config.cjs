module.exports = {
  _inputs: {
    title: {
      comment: 'The title of your page.'
    },
    author: {
      hidden: true
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
  'collections-config': {
    data: { path: 'data' },
    clients: {
      path: 'content/clients',
      url: '/clients/[slug]',
      "output": true,
      name: 'Clients',
      schemas: {
        default: {
          path: "schemas/clients/default.md"
        }
      }
    },
    webpages: {
      path: 'content/pages',
      url: '/[slug]',
      "output": true,
      name: 'Pages',
      _icon: 'wysiwyg',
      _enabled_editors: ['visual', 'content']
    },
    'staff-members': {
      path: 'content/staff-members',
      _enabled_editors: ['data'],
      name: 'Staff Members',
      schemas: {
        default: {
          path: "schemas/staff-members/default.md"
        },
        authors: {
          name: 'New Author',
          path: "schemas/staff-members/authors.md"
        }
      }
    },
    posts: {
      path: 'content/posts',
      "output": true,
      url: '/blog/[slug]',
      name: 'Blog',
      schemas: {
        default: {
          name: "New Post",
          path: "schemas/posts/default.md"
        }
      }
    }
  }
};