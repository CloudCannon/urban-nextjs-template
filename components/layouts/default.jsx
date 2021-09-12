import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import data from '../../lib/data';
import Icon from '../../components/icon';
import Navigation from '../../components/navigation';

export default function DefaultLayout({ children, page }) {
	const title = page.title ? `${page.title} | ${data.seo.title}` : data.seo.title;
	const description = page.description || data.seo.description;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="apple-touch-icon" href={`${data.site.baseurl}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${data.site.baseurl}/touch-icon.png`} sizes="192x192" />
				<link rel="icon" type="image/png" href={`${data.site.baseurl}/images/favicon.png`} />
			</Head>

			<NextSeo
				title={title}
				description={description}
				openGraph={{
					site_name: data.seo.site_name,
					url: data.site.url,
					title: title,
					description: description,
					images: data.seo.images.map((image) => ({
						url: image.image,
						width: image.height,
						height: image.width,
						alt: image.description
					}))
				}}
			/>
            <header>
                <div className="container">
                    <h1 className="company-name"><a href={`${data.site.baseurl}/`}><img src={`${data.site.baseurl}/images/logo.svg`} alt="Urban" width="150"/></a></h1>
                    <Navigation  page={page}/>
                </div>
            </header>
            {children}
            
			<footer className="diagonal">
				<div className="container">
					<div className="footer-columns" data-cms-editor-link="cloudcannon:collections/content/data/footer.json">
						{data.footer.map((column) => (
							<ul className="footer-links" key={column.title}>
								<li>
									<h2>{column.title}</h2>
								</li>

								{column.links.map((link) => (
									<li key={link.name}>
										<Link href={link.link}>
											<a target={link.new_window ? '_blank' : '_self'}>
												{link.social_icon && <Icon icon={link.social_icon} />} {link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						))}

						<ul className="footer-links">
							<li>
								<h2>{data.company.title}</h2>
							</li>
							<li>{data.company.description}</li>
							<li>
								<Link href={`${data.site.baseurl}/feed.xml`}><a><Icon icon="RSS" /> Subscribe with RSS</a></Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="legal-line">
					<p className="container">
						&copy; {new Date().getFullYear()} {data.company.title} &bull; Template by <Link href="https://cloudcannon.com/">CloudCannon</Link>
					</p>
				</div>
			</footer>
		</>
	);
}
