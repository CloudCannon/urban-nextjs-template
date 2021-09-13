import PageLayout from '../components/layouts/page';
import { getCollectionItem, getCollection } from '../lib/collections';
import data from '../lib/data';

export default function Portfolio({ page, clients }) {
  return (
		<PageLayout page={page}>
      <section className="diagonal patterned">
        <div className="container">
            <p className="editor-link" style={{textAlign:'center'}}><a href="cloudcannon:collections/content/clients/" className="btn"><strong>&#9998;</strong> Manage Clients</a></p>
          <ul className="image-grid">
                {clients.map((client, i) => (
                  <li key={i}>
                    <a href={`${data.site.baseurl}/clients/${client.slug}`}>
                      <img src={client.image_path } alt={ client.name }/>
                      <div className="details">
                        <div className="name">{ client.name }</div>
                        <div className="position">{ client.subtitle }</div>
                      </div>
                    </a>
                  </li>
                ))}
            <li className="filler"></li>
            <li className="filler"></li>
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}
export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'portfolio');
	const clients = await getCollection('clients');
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			clients: JSON.parse(JSON.stringify(clients))
		}
	};
}

