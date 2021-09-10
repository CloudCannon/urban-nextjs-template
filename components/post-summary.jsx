import Link from 'next/link';
import PostSummaryDetails from './post-summary-details';
import PostTitle from './post-title';

export default function PostSummary({ post }) {
	return (
		<div>
			<h3><a href={ `/blog/${post.slug}` }>{ post.title }</a></h3>
			<PostTitle post={post}/>
			<div className="post-content">
				<p>{ post.excerptHtml }</p>
				<p><a href={ `/blog/${post.slug}` }>Read More &rarr;</a></p>
			</div>
		</div>

	);
}





