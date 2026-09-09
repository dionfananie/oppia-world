import { buildSiteGraph } from './data';
import { useHome } from './useHome';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { SignalStrip } from './components/SignalStrip';
import { ProductsSection } from './components/ProductsSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { JourneysSection } from './components/JourneysSection';
import { FinalCta } from './components/FinalCta';
import { SiteFooter } from './components/SiteFooter';

/** Halaman landing utama Oppia World — komposisi section; state di useHome. */
export default function HomeView() {
	const { active, select, menuOpen, toggleMenu, closedMenu, mounted, selected } = useHome();
	const structuredData = buildSiteGraph();

	return (
		<main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<SiteHeader menuOpen={menuOpen} toggleMenu={toggleMenu} closedMenu={closedMenu} />
			<HeroSection active={active} select={select} mounted={mounted} />
			<SignalStrip />
			<ProductsSection active={active} select={select} selected={selected} />
			<PrinciplesSection />
			<JourneysSection select={select} />
			<FinalCta />
			<SiteFooter />
		</main>
	);
}
