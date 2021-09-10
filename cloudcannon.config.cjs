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

    'data-config': {
      company: {
        path: 'data/company.json'
      },
      footer: {
        path: 'data/footer.json'
      },
      seo: {
        path: 'data/seo.json'
      },
      site: {
        path: 'data/site.json'
      }
    },
  
    'collections-config': {
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
        name: 'Staff Members',
        slug: (filePath, frontMatter, filters) => {
          const slug = path.basename(filePath, path.extname(filePath));
          return slug;
        }
      },
      posts: {
        path: 'content/posts',
        "output": true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    }
  };