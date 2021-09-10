
import Link from 'next/link';

export default function Navigation({ children, page }) {
	return (
        <nav>
            <a className="nav-toggle" id="open-nav" href="#">&#9776;</a>
            <ul>
                <li>
                    <Link href="/portfolio">
                        <a className={page.slug === 'portfolio' ? 'active' : ''}>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className={page.slug === 'blog' ? 'active' : ''}>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={page.slug === 'about' ? 'active' : ''}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={page.slug === 'contact' ? 'active' : ''}>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
	);
}
