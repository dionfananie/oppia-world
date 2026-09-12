import type { Asset } from '../types';

type AssetCardProps = {
	asset: Asset;
};

/** Kartu gambar untuk satu kosakata: gambar + label en/ko + kategori. */
export function AssetCard({ asset }: AssetCardProps) {
	return (
		<figure className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
			<div className="aspect-square overflow-hidden bg-neutral-100">
				<img
					src={asset.imageUrl}
					alt={asset.en}
					loading="lazy"
					className="size-full object-cover transition duration-300 group-hover:scale-105"
				/>
			</div>
			<figcaption className="p-4">
				<div className="flex items-center justify-between gap-2">
					<p className="m-0 truncate font-semibold">{asset.en}</p>
					<span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-500">
						{asset.category}
					</span>
				</div>
				<p className="m-0 mt-0.5 text-sm text-neutral-500">{asset.ko}</p>
			</figcaption>
		</figure>
	);
}
