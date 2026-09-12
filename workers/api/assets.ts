import { categories, IMAGE_PATH, words } from '../../app/data/words';

const DEFAULT_LIMIT = 40;
const MAX_LIMIT = 500;

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'cache-control': 'public, max-age=60',
		},
	});

function toAsset(word: (typeof words)[number]) {
	return {
		id: word.id,
		category: word.category,
		en: word.en,
		ko: word.ko,
		image: word.image,
		imageUrl: `${IMAGE_PATH}/${word.image}`,
	};
}

function parseLimit(raw: string | null): number {
	if (!raw) return DEFAULT_LIMIT;
	const value = Number(raw);
	if (!Number.isFinite(value)) return DEFAULT_LIMIT;
	return Math.min(Math.max(Math.trunc(value), 1), MAX_LIMIT);
}

function listAssets(url: URL) {
	const type = (url.searchParams.get('type') ?? '').trim().toLowerCase();
	const search = (url.searchParams.get('search') ?? '').trim().toLowerCase();
	const limit = parseLimit(url.searchParams.get('limit'));

	const matched = words.filter((word) => {
		if (type && word.category.toLowerCase() !== type) return false;
		if (
			search &&
			!word.en.toLowerCase().includes(search) &&
			!word.ko.toLowerCase().includes(search)
		) {
			return false;
		}
		return true;
	});

	return json({
		total: matched.length,
		categories,
		items: matched.slice(0, limit).map(toAsset),
	});
}

async function serveImage(env: Env, filename: string) {
	const origin = env.ASSET_ORIGIN.replace(/\/+$/, '');
	const upstream = new URL(`${origin}/${filename}`);
	const response = await fetch(upstream, {
		cf: { cacheEverything: true, cacheTtl: 31536000 },
	});
	if (!response.ok) return json({ error: 'Not found' }, 404);

	const headers = new Headers(response.headers);
	headers.set('cache-control', 'public, max-age=31536000, immutable');

	return new Response(response.body, { headers });
}

/** Handler endpoint `/api/assets/*`: daftar asset + proxy gambar dari ASSET_ORIGIN. */
export async function handleAssetsApi(request: Request, env: Env): Promise<Response> {
	if (request.method !== 'GET') {
		return json({ error: 'Method not allowed' }, 405);
	}

	const url = new URL(request.url);
	const path = url.pathname.replace(/\/+$/, '');

	if (path === '/api/assets') return listAssets(url);

	const imagePrefix = `${IMAGE_PATH}/`;
	if (path.startsWith(imagePrefix)) {
		const filename = path.slice(imagePrefix.length);
		if (!filename) return json({ error: 'Missing filename' }, 400);
		return serveImage(env, decodeURIComponent(filename));
	}

	return json({ error: 'Not found' }, 404);
}
