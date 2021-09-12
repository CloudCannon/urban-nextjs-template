
import Link from 'next/link';
import data from '../lib/data';


export default function Navigation({ children, page }) {
	return (
        <nav>
            <a className="nav-toggle" id="open-nav" href="#">&#9776;</a>
            <ul>
                {data.navigation.links.map((link, i) => (
                    <li key={i}>
                        <Link href={ link.link }>
                            <a className={page.slug.toLowerCase() === link.name.toLowerCase()  ? 'active' : ''}>{link.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
	);
}
