import type { LucideIcon } from 'lucide-react';

/** Satu produk pada constellation homepage oppia.world. */
export type Product = {
	id: string;
	name: string;
	eyebrow: string;
	description: string;
	color: string;
	soft: string;
	icon: LucideIcon;
	action: string;
	detail: string;
	href: string;
};
