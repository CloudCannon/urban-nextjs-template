module.exports = {
    // Global CloudCannon configuration
    _comments: {
      title: 'The title of your page.'
    },
  
    'collections-config': {
      posts: {
        // Reads the contents of each file in this directory
        path: '_posts',
  
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