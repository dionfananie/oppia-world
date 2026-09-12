import { useAssets } from './useAssets';
import { SearchBar } from './components/SearchBar';
import { TypeFilter } from './components/TypeFilter';
import { AssetGrid } from './components/AssetGrid';

/** Halaman galeri aset — komposisi UI; state di useAssets. */
export default function AssetsView() {
	const {
		assets,
		total,
		loading,
		error,
		categories,
		type,
		setType,
		query,
		setQuery,
		hasMore,
		loadMore,
	} = useAssets();

	return (
		<main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-16">
			<header className="mb-10">
				<p className="m-0 mb-3 text-xs font-bold uppercase tracking-widest text-neutral-500">
					Vocabulary gallery
				</p>
				<h1 className="m-0 text-4xl font-bold tracking-tight sm:text-5xl">Assets</h1>
				<p className="m-0 mt-3 max-w-lg text-neutral-500">
					Browse word images by category, or search in English and Korean.
				</p>
			</header>

			<div className="mb-8 flex flex-col gap-4">
				<SearchBar query={query} onChange={setQuery} />
				<TypeFilter categories={categories} active={type} onSelect={setType} />
			</div>

			{error ? (
				<p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
					Failed to load assets: {error}
				</p>
			) : loading && assets.length === 0 ? (
				<p className="text-neutral-500">Loading…</p>
			) : assets.length === 0 ? (
				<p className="text-neutral-500">No images match your search.</p>
			) : (
				<>
					<AssetGrid assets={assets} />
					<div className="mt-10 flex items-center justify-center gap-6">
						<p className="m-0 text-sm text-neutral-500">
							Showing {assets.length} of {total}
						</p>
						{hasMore && (
							<button
								type="button"
								onClick={loadMore}
								disabled={loading}
								className="rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold transition hover:border-black/40 disabled:opacity-50"
							>
								{loading ? 'Loading…' : 'Load more'}
							</button>
						)}
					</div>
				</>
			)}
		</main>
	);
}
