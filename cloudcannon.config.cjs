module.exports = {
    _comments: {
      title: 'The title of your page.'
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
      webpages: {
        path: 'content/pages',
        url: '/[slug]',
        "output": true,
        name: 'Pages'
      },
      'staff-members': {
        path: 'content/staff-members',
        "output": true,
        name: 'Staff Members',
      },
      posts: {
        path: 'content/posts',
        "output": true,
        url: '/blog/[slug]',
        name: 'Blog'
      }
    }
  };