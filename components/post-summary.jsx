import PostTitle from './post-title';
import data from '../lib/data';

export default function PostSummary({ post }) {
	return (
		<>
			<h3><a href={ `${data.site.baseurl}/blog/${post.slug}` }>{ post.title }</a></h3>
			<PostTitle post={post}/>
			<div className="post-content">
				<p>{ post.excerptHtml }</p>
				<p><a href={ `${data.site.baseurl}/blog/${post.slug}` }>Read More &rarr;</a></p>
			</div>
		</>
	);
}





