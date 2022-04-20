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
      'output': true,
      name: 'Clients',
      schemas: {
        default: {
          path: 'schemas/clients/default.md',
          image_key: 'image_path'
        }
      }
    },
    webpages: {
      path: 'content/pages',
      url: '/[slug]',
      'output': true,
      name: 'Pages',
      _icon: 'wysiwyg',
      _enabled_editors: ['visual', 'content']
    },
    'staff-members': {
      path: 'content/staff-members',
      _enabled_editors: ['data'],
      name: 'Staff Members',
      image_size: 'cover',
      schemas: {
        default: {
          icon: 'person',
          name: 'Staff',
          path: 'schemas/staff-members/default.md',
          subtext_key: 'name',
          text_key: 'description',
          remove_extra_inputs: false,
          reorder_inputs: false,
          hide_extra_inputs: true
        },
        authors: {
          name: 'New Author',
          icon: 'nature_people',
          path: 'schemas/staff-members/authors.md',
          subtext_key: 'name',
          text_key: 'bio',
          remove_extra_inputs: false,
          remove_empty_inputs: true,
          image_size: 'contain'
        }
      }
    },
    posts: {
      path: 'content/posts',
      'output': true,
      url: '/blog/[slug]',
      name: 'Blog',
      schemas: {
        default: {
          name: 'New Post',
          icon: 'article',
          path: 'schemas/posts/default.md'
        }
      }
    }
  }
};