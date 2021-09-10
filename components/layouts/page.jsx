import DefaultLayout from './default';

export default function PageLayout({ children, page }) {
	const title = page.heading ?  page.heading  : page.title;
	return (
		<DefaultLayout page={page}>

            <section className="hero diagonal">
                <div className="container">
                    {/* TODO: Condition the fields*/}
                    <h2>{ title }</h2>
                    <p className="subtext">{ page.subtitle }</p>
                </div>
            </section>
            {children}
		 </DefaultLayout>
	);
}
