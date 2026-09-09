import {
	BookOpen,
	Braces,
	FileText,
	FlaskConical,
	Gamepad2,
	Mic2,
} from 'lucide-react';
import type { Product } from './types';

export const SITE_URL = 'https://oppia.world';

export const products: Product[] = [
	{
		id: 'moozhaf',
		name: 'Moozhaf',
		eyebrow: 'Read with presence',
		description: 'A calm, considered space for Quran, surah, and ayah—made for returning daily.',
		color: '#1f9d74',
		soft: '#dff5eb',
		icon: BookOpen,
		action: 'Begin reading',
		detail: 'Quran companion',
		href: 'https://moozhaf.oppia.world',
	},
	{
		id: 'pica',
		name: 'PICA',
		eyebrow: 'Little hands, big discoveries',
		description: 'Joyful matching games that help children ages 2–7 learn colors, images, and letters.',
		color: '#e46140',
		soft: '#ffe8db',
		icon: Gamepad2,
		action: 'Start playing',
		detail: 'Early learning games',
		href: 'https://pica.oppia.world',
	},
	{
		id: 'tolk',
		name: 'Tolk',
		eyebrow: 'Speak business with confidence',
		description: 'Realistic AI roleplay that listens, corrects, and helps every sentence sound professional.',
		color: '#7257d9',
		soft: '#ebe5ff',
		icon: Mic2,
		action: 'Practice a scenario',
		detail: 'Business English coach',
		href: '#products',
	},
	{
		id: 'toolhub',
		name: 'Toolhub',
		eyebrow: 'Small tools. Zero friction.',
		description: 'Fast, focused utilities for developers converting PDFs, text, and structured data.',
		color: '#1777d2',
		soft: '#dceeff',
		icon: Braces,
		action: 'Open the toolbox',
		detail: 'Developer utilities',
		href: 'https://toolhub.oppia.world',
	},
	{
		id: 'writer',
		name: 'Writer',
		eyebrow: 'Turn raw material into momentum',
		description: 'Generate ideas, transform documents, and extract useful data from PDFs and Threads.',
		color: '#c47a13',
		soft: '#fff0cf',
		icon: FileText,
		action: 'Create something',
		detail: 'Creative workflow',
		href: 'https://write.oppia.world',
	},
	{
		id: 'insidelab',
		name: 'insideLab',
		eyebrow: 'Learn code by running it',
		description: 'An interactive lab for JavaScript and logic. Read a model, test your prediction, and run it yourself to see what is really happening.',
		color: '#2e5b47',
		soft: '#e6efe9',
		icon: FlaskConical,
		action: 'Enter the lab',
		detail: 'JavaScript & logic lessons',
		href: 'https://insidelab.oppia.world',
	},
] satisfies Product[];

/** Node @graph utk rich-result JSON-LD (org + website + satu WebSite per produk). */
export function buildSiteGraph(): Record<string, unknown> {
	const subsites = products.map((product) => ({
		'@type': 'WebSite',
		name: `Oppia ${product.name}`,
		url: product.href,
		description: product.description,
		inLanguage: 'en',
		publisher: { '@id': `${SITE_URL}/#organization` },
	}));

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${SITE_URL}/#organization`,
				name: 'Oppia',
				url: SITE_URL,
				logo: `${SITE_URL}/logo-small.png`,
				description:
					'Thoughtful digital products for reading, learning, speaking, building, and creating.',
			},
			{
				'@type': 'WebSite',
				'@id': `${SITE_URL}/#website`,
				url: SITE_URL,
				name: 'Oppia',
				inLanguage: 'en',
				publisher: { '@id': `${SITE_URL}/#organization` },
			},
			...subsites,
		],
	};
}
