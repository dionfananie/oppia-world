import { ArrowRight } from 'lucide-react';

/** CTA penutup sebelum footer — statis. */
export function FinalCta() {
	return (
		<section className="final-cta" id="about">
			<div className="cta-orb">
				<img src="/logo-small.png" width={75} height={75} />
			</div>
			<p className="kicker light">
				<span />
				Your next useful thing
			</p>
			<h2>
				Six products.
				<br />
				One place to begin.
			</h2>
			<p>Choose the moment you want to improve. Oppia will help you move it forward.</p>
			<a className="button white" href="#products">
				Explore the ecosystem <ArrowRight size={18} />
			</a>
		</section>
	);
}
