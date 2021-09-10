module.exports = {
    // Global CloudCannon configuration
    _comments: {
      title: 'The title of your page.'
    },
  
    'data-config': {
      company: {
        // Reads the contents of this file
        path: 'data/company.json'
      },
      footer: {
        // Reads the contents of this file
        path: 'data/footer.json'
      },
      seo: {
        // Reads the contents of this file
        path: 'data/seo.json'
      },
      site: {
        // Reads the contents of this file
        path: 'data/site.json'
      }
    },
  
    'collections-config': {
      clients: {
        // Reads the contents of each file in this directory
        path: 'content/clients',
        "output": true,

        // How to parse the files in this collection
        parser: 'front-matter',
        
        // CloudCannon collection-level configuration
        name: 'Clients',
        _enabled_editors: ['data','content']
      },
      pages: {
        // Reads the contents of each file in this directory
        path: 'content/pages',

        // How to parse the files in this collection
        parser: 'front-matter',
        
        // CloudCannon collection-level configuration
        name: 'Pages'
      },
      'staff-members': {
        // Reads the contents of each file in this directory
        path: 'content/staff-members',
        "output": true,

        // How to parse the files in this collection
        parser: 'front-matter',

        // CloudCannon collection-level configuration
        name: 'Staff Members',
        _enabled_editors: ['data','content']
      },
      posts: {
        // Reads the contents of each file in this directory
        path: 'content/posts',
        "output": true,
  
        // How to parse the files in this collection
        parser: 'front-matter',
  
        // The URL function for items in this collection
        url: (filePath, frontMatter, filters) => {
          const year = new Date(frontMatter.date).getFullYear();
          const slug = filters.slugify(frontMatter.title || '');
          return `/posts/${year}/${slug}/`;
        }
      }
    }
  };