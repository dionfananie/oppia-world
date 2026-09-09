import { ArrowDownRight, ArrowRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { products } from '../data';
import type { HomeInteractions } from '../useHome';

type Props = Pick<HomeInteractions, 'active' | 'select' | 'mounted'>;

/** Hero: copy kiri + orbit constellation 6 produk (klik planet utk pilih produk). */
export function HeroSection({ active, select, mounted }: Props) {
	return (
		<section className="hero" id="top">
			<div className={`hero-copy ${mounted ? 'is-in' : ''}`}>
				<p className="kicker">
					<span />
					One world. Six useful ways forward.
				</p>
				<h1>
					Digital products for the moments that <em>move you.</em>
				</h1>
				<p className="hero-lede">
					Read with intention. Help a child discover. Speak with confidence. Build faster. Turn ideas into something real.
				</p>
				<div className="hero-actions">
					<a className="button primary" href="#products">
						Find your product <ArrowRight size={18} />
					</a>
					<a className="text-link" href="#principles">
						See how we design <ArrowDownRight size={17} />
					</a>
				</div>
				<div className="trust-line">
					<span className="avatars">
						<i>M</i>
						<i>P</i>
						<i>T</i>
						<i>+</i>
					</span>
					<span>Made for focus, built for real life.</span>
				</div>
			</div>
			<div
				className={`orbit-stage ${mounted ? 'is-in' : ''}`}
				aria-label="Oppia product constellation"
			>
				<div className="ambient ambient-a" />
				<div className="ambient ambient-b" />
				<div className="orbit orbit-one" />
				<div className="orbit orbit-two" />
				<div className="core">
					<span className="core-mark">
						<img src="/logo-white-small.png" width={50} height={50} />
					</span>
				</div>
				{products.map((product, index) => {
					const Icon = product.icon;
					return (
						<button
							key={product.id}
							className={`planet planet-${index + 1} ${active === product.id ? 'active' : ''}`}
							style={{ '--product': product.color, '--soft': product.soft } as CSSProperties}
							onClick={() => select(product.id)}
							aria-label={`Show ${product.name}`}
						>
							<Icon size={19} />
							<span>{product.name}</span>
						</button>
					);
				})}
			</div>
		</section>
	);
}
