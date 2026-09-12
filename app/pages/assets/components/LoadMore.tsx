type LoadMoreProps = {
	loading: boolean;
	shown: number;
	total: number;
	hasMore: boolean;
	onLoadMore: () => void;
};

/** Penghitung hasil + tombol muat lebih banyak pada galeri aset. */
export function LoadMore({ loading, shown, total, hasMore, onLoadMore }: LoadMoreProps) {
	return (
		<div className="mt-10 flex items-center justify-center gap-6">
			<p className="m-0 text-sm text-neutral-500">
				Showing {shown} of {total}
			</p>
			{hasMore && (
				<button
					type="button"
					onClick={onLoadMore}
					disabled={loading}
					className="rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold transition hover:border-black/40 disabled:opacity-50"
				>
					{loading ? 'Loading…' : 'Load more'}
				</button>
			)}
		</div>
	);
}
