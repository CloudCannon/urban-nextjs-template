import ClientLayout from '../../components/layouts/client';
import { getCollectionSlugs, getCollectionItem } from '../../lib/collections';

export default function Post({ page, portfolio }) {
	return (
		<ClientLayout page={page} portfolio={portfolio}/>
	);
}

export async function getStaticPaths() {
	const slugs = await getCollectionSlugs('clients');
	const ignored = {
		_defaults: true
	};
	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('clients', params.slug);
	const portfolio = await getCollectionItem('pages', 'portfolio');
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			portfolio: JSON.parse(JSON.stringify(portfolio))
		}
	};
}