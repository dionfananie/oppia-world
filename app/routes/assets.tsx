import type { Route } from './+types/assets';
import AssetsView from '../pages/assets';

export function meta({ }: Route.MetaArgs) {
	const title = 'Assets — Oppia';
	const description =
		'Browse Kawaii 2D images across Food, Things, People, Animals, and Plants. Oppia World Universe';

	return [
		{ title },
		{ name: 'description', content: description },
		{ name: 'robots', content: 'index, follow' },
	];
}

export default AssetsView;
