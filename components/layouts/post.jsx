import PageLayout from './page';
import PostTitle from '../post-title';
import data from '../../lib/data';
import { DiscussionEmbed } from 'disqus-react';
import StaffMember from '../../components/staff';
import PostSummary from '../../components/post-summary';

export default function PostLayout({ children, page, author, nextPost }) {
	return (
		<PageLayout page={page}>
		 <section className="diagonal">
		 	<div className="blog-post text-container">
			<PostTitle post={page}/>
			
			 <div className="post-content" dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
		 	</div>
		 </section>
		 <section className="diagonal patterned">
			<div className="container">
				<h2>Author</h2>
				<ul className="image-grid">
					<li><StaffMember staff={author} /></li>
				</ul>
			</div>
		</section>
		
		{nextPost && (
			<section className="diagonal alternate">
				<div className="text-container">
					<h2>Next post</h2>
					<div className="blog-post">
							<>
								<PostSummary post={nextPost} />
							</>
					</div>
				</div>
			</section>
		)}

		 {data.site.disqus_shortname && (
					<>
						<h2>Have your say</h2>
						<DiscussionEmbed
							className="post-comments"
							shortname={data.site.disqus_shortname}
							config={{
								url: `${data.site.url}/blog/${page.slug}`.replace(/\/+/g, '/'),
								identifier: page.slug,
								title: page.title
							}} />
					</>
				)}
		</PageLayout>
	);
}
