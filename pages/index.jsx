import DefaultLayout from '../components/layouts/default';
import { getCollectionItem, getCollection } from '../lib/collections';

export default function Home({ page, clients }) {
  return (
		<DefaultLayout page={page}>
      <section className="hero diagonal">
        <div className="container">
          <h2 className="editable">We build websites</h2>
          <p className="subtext editable">This is the <strong>Urban</strong> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Urban is a strong foundation for the web presence of your agency.</p>
          <p><a className="button alt" href="{{ site.baseurl }}/contact/">Contact Us</a></p>
        </div>
        </section>
        <section className="diagonal patterned">
        <div className="container halves">
          <div>
            <h3 className="editable">Some of our work</h3>
            <p className="editable">We take pride in our previous work and our happy customers. We cater to any sector to boost business and increase exposure.</p>
            <p className="editable"><a href="{{ site.baseurl }}/portfolio/">View Full Portfolio &rarr;</a></p>
          </div>
          <div>
            <ul className="image-grid">
              {clients.slice(0, 4).map((client, i) => (
                <li  key={i}>
                  <a href={ 'clients/' + client.slug}>
                    <img src={client.image_path}/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="diagonal alternate">
        <div className="container halves">
          <div>
            <ul className="image-list">
              <li><img src="/images/cloudcannon-logo-blue.svg" width="250" style={{marginBottom: 40 + 'px'}}/></li>
              <li><img src="/images/jekyll-logo-black-red-transparent.png" width="300"/></li>
            </ul>
          </div>
          <div>
            <h3 className="editable">Latest software, greatest perfomance</h3>
            <p className="editable">As a new agency we get reap the benefits of the latest and greatest. We build our websites with the most up to date technology. This ensures your website is fast, efficient and reliable for many years.</p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'index');
	const clients = await getCollection('clients');
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			clients: JSON.parse(JSON.stringify(clients))
		}
	};
}

