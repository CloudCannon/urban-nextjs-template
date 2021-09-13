import { writeFile } from 'fs/promises';
import PageLayout from '../../components/layouts/page';
import PostSummary from '../../components/post-summary';
import { getCollection, getCollectionItem } from '../../lib/collections';
import { generateRss } from '../../lib/rss';

export default function Blog({ page, posts }) {
	return (
		<PageLayout page={page}>
      <section className="diagonal">
        <div className="text-container">
          <p className="editor-link"><a href="cloudcannon:collections/content/posts" className="btn"><strong>&#9998;</strong> Add Post</a></p>
          <ul className="blog-posts">
            {posts.map((post, i) => (
              <li className="blog-post" key="i">
                <PostSummary post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>
			{/* <ol className="post-list">
				
			</ol> */}
		</PageLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'blog');
	const posts = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	const postsWithAuthor = await Promise.all(posts.map(async (post) => {
		const author = await getCollectionItem('staff-members', post[`author-staff-member`]);
		return { ...post, author }
	}));

	await writeFile('./public/feed.xml', generateRss(postsWithAuthor));

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(postsWithAuthor))
		}
	};
}
