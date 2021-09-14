
import Link from 'next/link';
import data from '../lib/data';


export default function Navigation({ children, page }) {
	return (
        <>
        <nav>
            <a className="nav-toggle" id="open-nav" href="#">&#9776;</a>
            <ul>
                {data.navigation.links.map((link, i) => (
                    <li key={i}>
                        <Link href={ `${data.site.baseurl}${link.link}` }>
                            <a className={page?.slug?.toLowerCase() === link.name.toLowerCase()  ? 'active' : ''}>{link.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <p className="editor-link" style={{textAlign: 'right'}}><a href="cloudcannon:data/data/navigation.json" className="btn"><strong>&#9998;</strong> Edit Navigation</a></p>
    </>
	);
}
