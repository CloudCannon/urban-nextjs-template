import next from 'next';
import PostLayout from '../../components/layouts/post';
import { getCollectionSlugs, getCollectionItem, getNextCollectionItem } from '../../lib/collections';

export default function Post({ page, author, nextPost }) {
	return (
		<PostLayout page={page} author={author} nextPost={nextPost} />
	);
}

export async function getStaticPaths() {
	return {
		paths: await getCollectionSlugs('posts'),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', page.author_staff_member);
	const nextPost = await getNextCollectionItem('posts', params.slug, { excerpt: true, sortKey: 'date' });
	// console.log(nextPost)
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			author,
			nextPost: nextPost ? JSON.parse(JSON.stringify(nextPost)) : null
		}
	};
}
