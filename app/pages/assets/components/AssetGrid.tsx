import type { Asset } from '../types';
import { AssetCard } from './AssetCard';

type AssetGridProps = {
	assets: Asset[];
};

/** Grid galeri gambar aset. */
export function AssetGrid({ assets }: AssetGridProps) {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{assets.map((asset) => (
				<AssetCard key={asset.id} asset={asset} />
			))}
		</div>
	);
}
