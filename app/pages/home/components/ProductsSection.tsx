import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';
import type { Product } from '../types';
import type { HomeInteractions } from '../useHome';
import { ProductPreview } from './ProductPreview';

type Props = Pick<HomeInteractions, 'active' | 'select'> & { selected: Product };

/** Bagian produk utama: tab selector 6 produk + stage besar yg render preview aktif. */
export function ProductsSection({ active, select, selected }: Props) {
	return (
		<section className="products-section" id="products">
			<div className="section-heading">
				<div>
					<p className="kicker">
						<span />
						The Oppia constellation
					</p>
					<h2>
						Different needs.
						<br />
						One thoughtful ecosystem.
					</h2>
				</div>
				<p>
					Every product has its own character and purpose. What connects them is a refusal to make simple things feel complicated.
				</p>
			</div>

			<div className="product-selector" role="tablist" aria-label="Oppia products">
				{products.map((product, index) => (
					<button
						key={product.id}
						role="tab"
						aria-selected={active === product.id}
						className={active === product.id ? 'selected' : ''}
						onClick={() => select(product.id)}
						style={{ '--product': product.color } as CSSProperties}
					>
						<span>0{index + 1}</span>
						{product.name}
					</button>
				))}
			</div>

			<article
				className="product-stage"
				style={{ '--product': selected.color, '--soft': selected.soft } as CSSProperties}
			>
				<div className="product-copy">
					<span className="product-chip">
						<selected.icon size={16} />
						{selected.detail}
					</span>
					<p>{selected.eyebrow}</p>
					<h3>{selected.name}</h3>
					<div className="product-description">{selected.description}</div>
					<a className="button product-button" href={selected.href}>
						{selected.action}
						<ArrowRight size={18} />
					</a>
					<div className="product-pagination">
						{products.map((product) => (
							<button
								key={product.id}
								aria-label={`View ${product.name}`}
								className={product.id === active ? 'current' : ''}
								onClick={() => select(product.id)}
							/>
						))}
					</div>
				</div>
				<div className="product-visual">
					<div className="halo" />
					<ProductPreview id={selected.id} />
					<span className="floating-tag tag-one">Designed for flow</span>
					<span className="floating-tag tag-two">No clutter</span>
				</div>
			</article>
		</section>
	);
}
