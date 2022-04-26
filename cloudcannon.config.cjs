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
    data: { 
      path: 'data',
      disable_add: true,
      disable_add_folder: true
    },
    clients: {
      path: 'content/clients',
      url: '/clients/[slug]',
      'output': true,
      name: 'Clients',
      image_key: 'image_path',
      disable_add_folder: true,
      _enabled_editors: ['source']
    },
    webpages: {
      path: 'content/pages',
      url: '/[slug]',
      'output': true,
      name: 'Pages',
      icon: 'wysiwyg',
      _enabled_editors: ['visual', 'content']
    },
    'staff-members': {
      path: 'content/staff-members',
      _enabled_editors: ['data'],
      name: 'Staff Members',
      image_size: 'contain',
      text_key: 'name',
      icon: 'person',
      schema_key: '_my_schema_definition',
      disable_add_folder: true,
      disable_file_actions: true,
      schemas: {
        default: {
          name: 'Staff',
          path: 'schemas/staff-members/default.md',
          remove_extra_inputs: false,
          reorder_inputs: false,
          hide_extra_inputs: true
        },
        authors: {
          name: 'New Author',
          icon: 'nature_people',
          path: 'schemas/staff-members/authors.md',
          text_key: 'name',
          subtext_key: 'bio',
          remove_extra_inputs: false,
          remove_empty_inputs: true,
          image_size: ''
        }
      },
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
      ]
    },
    posts: {
      path: 'content/posts',
      'output': true,
      url: '/blog/[slug]',
      name: 'Blog',
      add_options: [
        {
          name: 'Read the docs',
          icon: 'local_library',
          href: 'https://docs.cloudcannon.com'
        },
        {
          name: 'Add Post',
          editor: 'content',
          base_path: '/blog/drafts/'
        },
        {
          name: 'Add Author',
          editor: 'content',
          icon: 'person',
          collection: 'staff-members',
          schema: 'authors'
        }
      ],
      schemas: {
        default: {
          path: 'schemas/posts/default.md'
        }
      }
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
  ],
};


