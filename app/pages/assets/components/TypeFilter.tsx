type TypeFilterProps = {
	categories: string[];
	active: string;
	onSelect: (type: string) => void;
};

const pillClass = (selected: boolean) =>
	[
		'rounded-full border px-4 py-2 text-sm font-semibold transition',
		selected
			? 'border-black bg-black text-white'
			: 'border-black/15 bg-white text-black/70 hover:border-black/40',
	].join(' ');

/** Deretan tombol kategori untuk memfilter aset berdasarkan tipe. */
export function TypeFilter({ categories, active, onSelect }: TypeFilterProps) {
	return (
		<div className="flex flex-wrap gap-2">
			<button
				type="button"
				className={pillClass(active === '')}
				onClick={() => onSelect('')}
			>
				All
			</button>
			{categories.map((category) => (
				<button
					key={category}
					type="button"
					className={pillClass(active === category)}
					onClick={() => onSelect(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
}
