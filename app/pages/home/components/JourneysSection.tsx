import type { CSSProperties } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { products } from '../data';
import type { HomeInteractions } from '../useHome';

type Props = Pick<HomeInteractions, 'select'>;

/** Daftar "start where you are" — tiap produk jd link pendek. */
export function JourneysSection({ select }: Props) {
	return (
		<section className="journeys">
			<div className="journey-intro">
				<p className="kicker">
					<span />
					Start where you are
				</p>
				<h2>What do you want to do today?</h2>
			</div>
			<div className="journey-list">
				{products.map((product, index) => {
					const Icon = product.icon;
					return (
						<a
							key={product.id}
							id={product.id}
							href={product.href}
							onClick={() => select(product.id)}
							style={{ '--product': product.color, '--soft': product.soft } as CSSProperties}
						>
							<span className="journey-number">0{index + 1}</span>
							<span className="journey-icon">
								<Icon />
							</span>
							<span>
								<b>{product.eyebrow}</b>
								<small>
									{product.name} · {product.detail}
								</small>
							</span>
							<ArrowDownRight className="journey-arrow" />
						</a>
					);
				})}
			</div>
		</section>
	);
}
