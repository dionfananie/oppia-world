import { MessageCircle, MoonStar, Sparkles } from 'lucide-react';

/** Prinsip desain — statis, tanpa state/interaksi. */
export function PrinciplesSection() {
	return (
		<section className="principles" id="principles">
			<p className="kicker light">
				<span />
				How Oppia feels
			</p>
			<h2>
				Technology should leave you with <em>more attention</em>, not less.
			</h2>
			<div className="principle-grid">
				<article>
					<span>01</span>
					<MoonStar />
					<h3>Calm, not cold</h3>
					<p>
						Warm surfaces and clear hierarchy keep the experience focused without feeling clinical.
					</p>
				</article>
				<article>
					<span>02</span>
					<MessageCircle />
					<h3>Guidance, not noise</h3>
					<p>
						Each interaction gives the next useful cue—nothing competes with the task in front of you.
					</p>
				</article>
				<article>
					<span>03</span>
					<Sparkles />
					<h3>Delight with purpose</h3>
					<p>
						Motion, depth, and personality signal progress and relationships, never delay them.
					</p>
				</article>
			</div>
		</section>
	);
}
