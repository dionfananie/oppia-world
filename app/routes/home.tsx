import type { Route } from './+types/home';
import HomeView from '../pages/home';
import { products, SITE_URL } from '../pages/home/data';

export function meta({}: Route.MetaArgs) {
	const title = 'Oppia — Six ways to move forward';
	const description = `Thoughtful digital products for reading, learning, speaking, building, creating, and coding. Explore ${products
		.map((product) => product.name)
		.join(', ')}.`;

	return [
		{ title },
		{ name: 'description', content: description },
		{ name: 'robots', content: 'index, follow' },
		{ name: 'author', content: 'Oppia World' },
		{ property: 'og:site_name', content: 'Oppia' },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: SITE_URL },
		{ property: 'og:image', content: `${SITE_URL}/og.png` },
		{ property: 'og:image:secure_url', content: `${SITE_URL}/og.png` },
		{ property: 'og:image:width', content: '1200' },
		{ property: 'og:image:height', content: '630' },
		{ property: 'og:image:alt', content: title },
		{ property: 'og:locale', content: 'en_US' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: `${SITE_URL}/og.png` },
		{ name: 'twitter:image:alt', content: title },
	];
}

export function links() {
	return [
		{ rel: 'canonical', href: SITE_URL },
		{ rel: 'manifest', href: '/site.webmanifest' },
		{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
	];
}

export default HomeView;
