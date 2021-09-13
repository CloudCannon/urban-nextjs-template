import PageLayout from '../components/layouts/page';
import { getCollectionItem, getCollection } from '../lib/collections';
import StaffMember from '../components/staff';

export default function About({ page, staffMembers }) {
  return (
		<PageLayout page={page}>
      <section className="diagonal patterned">
        <div className="container">
            <p className="editor-link" style={{textAlign:'center'}}><a href="cloudcannon:collections/content/staff-members/" className="btn"><strong>&#9998;</strong>Manage Staff members</a></p>
          <ul className="image-grid">
              {staffMembers.slice(0,2).map((staff, i) => (
				        <li key={i}><StaffMember staff={staff} /></li>
              ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}
export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'about');
	const staffMembers = await getCollection('staff-members');
	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			staffMembers: JSON.parse(JSON.stringify(staffMembers))
		}
	};
}

