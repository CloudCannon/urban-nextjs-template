import Link from 'next/link';
import data from '../../lib/data';
import DefaultLayout from './default';

export default function ClientLayout({ page, portfolio }) {
	const title = page.heading ?  page.heading  : page.title;
	return (
		<DefaultLayout page={page}>

			<section className="hero diagonal">
				<div className="container">
					{ portfolio.heading && 
						<h2>
							<Link href={`${data.site.baseurl}/portfolio`}>{ portfolio.heading }</Link><span> / {page.name}</span>
						</h2>
					}
					{ page.subtitle &&
						<p className="subtext">{ page.subtitle }</p>
					}
				</div>
			</section>

			<section className="diagonal">
				<div className="container">
					<p>
						<img src={ page.image_path } className="screenshot" alt={page.title}/></p>
					<div>
			 			<div className="post-content" dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
					</div>
					<p><a href={ page.external_url }>View { page.name } &rarr;</a></p>
				</div>
			</section>
		 </DefaultLayout>
	);
}
