import data from '../lib/data';
import {capitalise} from '../lib/string-helper';

export default function PostTitle({ post }) {
	const date = post.date ? new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}) : '';

	return (
		<p className="post-details">
			{post.categories.slice(0, 4).map((category, i) => (
				<span className="blog-filter" key={i}>
					<a>{ capitalise(category) }</a>
				</span>
              ))}
			<span className="post-date">{ date }</span>
		</p>
	);
}