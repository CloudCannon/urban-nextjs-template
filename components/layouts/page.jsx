import DefaultLayout from './default';

export default function PageLayout({ children, page }) {
	const title = page.heading ?  page.heading  : page.title;
	return (
		<DefaultLayout page={page}>

            <section className="hero diagonal">
                <div className="container">
                { (page.heading || page.title) &&
                    <h2>{ title }</h2>
                }
                { page.subtitle &&
                    <p className="subtext" data-cms-bind="#subtitle">{ page.subtitle }</p>
                }
                </div>
            </section>
            {children}
		 </DefaultLayout>
	);
}
