import { ArrowDownRight, Menu, X } from 'lucide-react';
import type { HomeInteractions } from '../useHome';

type Props = Pick<HomeInteractions, 'menuOpen' | 'toggleMenu' | 'closedMenu'>;

/** Header fiks di atas (desktop nav + menu seluler). */
export function SiteHeader({ menuOpen, toggleMenu, closedMenu }: Props) {
	return (
		<header className="site-header">
			<a className="brand" href="#top" aria-label="Oppia home">
				<span className="brand-mark">
					<img src="/logo-small.png" alt="" />
				</span>
				<span>Oppia world</span>
			</a>
			<nav className="desktop-nav" aria-label="Primary navigation">
				<a href="#products">Products</a>
				<a href="#principles">Why Oppia world</a>
				<a href="#about">About</a>
			</nav>
			<a className="header-cta" href="#products">
				Explore products <ArrowDownRight size={16} />
			</a>
			<button
				className="menu-button"
				onClick={toggleMenu}
				aria-expanded={menuOpen}
				aria-label="Toggle navigation"
			>
				{menuOpen ? <X /> : <Menu />}
			</button>
			{menuOpen && (
				<nav className="mobile-nav">
					<a href="#products" onClick={closedMenu}>Products</a>
					<a href="#principles" onClick={closedMenu}>Why Oppia world</a>
					<a href="#about" onClick={closedMenu}>About</a>
				</nav>
			)}
		</header>
	);
}
