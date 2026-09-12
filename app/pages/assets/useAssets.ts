import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { categories } from '../../data/words';
import type { Asset, AssetsResponse } from './types';

const DEFAULT_LIMIT = 40;
const PAGE_STEP = 40;

export type AssetsInteractions = {
	assets: Asset[];
	total: number;
	loading: boolean;
	loadingMore: boolean;
	error: string | null;
	categories: string[];
	type: string;
	setType: (type: string) => void;
	query: string;
	setQuery: (query: string) => void;
	hasMore: boolean;
	loadMore: () => void;
};

/** State & data untuk halaman assets: filter type, pencarian, dan load-more. */
export function useAssets(): AssetsInteractions {
	const [searchParams, setSearchParams] = useSearchParams();
	const type = searchParams.get('type') ?? '';
	const query = searchParams.get('q') ?? '';

	const [assets, setAssets] = useState<Asset[]>([]);
	const [total, setTotal] = useState(0);
	const [limit, setLimit] = useState(DEFAULT_LIMIT);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const isLoadMore = limit > DEFAULT_LIMIT;
		const params = new URLSearchParams();
		if (type) params.set('type', type);
		if (query) params.set('search', query);
		params.set('limit', String(limit));

		if (isLoadMore) setLoadingMore(true);
		else setLoading(true);
		setError(null);

		fetch(`/api/assets?${params.toString()}`, { signal: controller.signal })
			.then((response) => {
				if (!response.ok) throw new Error(`Request failed (${response.status})`);
				return response.json() as Promise<AssetsResponse>;
			})
			.then((data) => {
				setAssets(data.items);
				setTotal(data.total);
			})
			.catch((err: unknown) => {
				if (err instanceof DOMException && err.name === 'AbortError') return;
				setError(err instanceof Error ? err.message : 'Unexpected error');
			})
			.finally(() => {
				if (!controller.signal.aborted) {
					setLoading(false);
					setLoadingMore(false);
				}
			});

		return () => controller.abort();
	}, [type, query, limit]);

	const setType = useCallback(
		(next: string) => {
			setLimit(DEFAULT_LIMIT);
			setSearchParams(
				(prev) => {
					const nextParams = new URLSearchParams(prev);
					if (next) nextParams.set('type', next);
					else nextParams.delete('type');
					return nextParams;
				},
				{ preventScrollReset: true },
			);
		},
		[setSearchParams],
	);

	const setQuery = useCallback(
		(next: string) => {
			setLimit(DEFAULT_LIMIT);
			setSearchParams(
				(prev) => {
					const nextParams = new URLSearchParams(prev);
					if (next) nextParams.set('q', next);
					else nextParams.delete('q');
					return nextParams;
				},
				{ replace: true, preventScrollReset: true },
			);
		},
		[setSearchParams],
	);

	const loadMore = useCallback(() => setLimit((current) => current + PAGE_STEP), []);

	return {
		assets,
		total,
		loading,
		loadingMore,
		error,
		categories,
		type,
		setType,
		query,
		setQuery,
		hasMore: assets.length < total,
		loadMore,
	};
}
