import DefaultLayout from './default';

export default function PageLayout({ children, page }) {
	return (
		<DefaultLayout page={page}>

            <section className="hero diagonal">
                <div className="container" style={{maxWidth:100 +'%'}}>
                    {/* TODO: Condition the fields*/}
                    <h2>{ page.heading }</h2>
                    <h2>{ page.title}</h2>
                    <p className="subtext">{ page.subtitle }</p>
                </div>
            </section>
            {children}
		 </DefaultLayout>
	);
}
