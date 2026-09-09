import { useEffect, useMemo, useState } from 'react';
import { products } from './data';
import type { Product } from './types';

export type HomeInteractions = {
	/** produk aktif yg sedang ditampilkan di stage */
	active: string;
	select: (id: string) => void;
	menuOpen: boolean;
	toggleMenu: () => void;
	closedMenu: () => void;
	/** mounted: utk animasi entrance setelah render pertama */
	mounted: boolean;
	/** produk terpilih yg jadi dasar ProductStage */
	selected: Product;
};

/** State interaksi landing home (pisahkan dari JSX di View). */
export function useHome(): HomeInteractions {
	const [active, setActive] = useState('moozhaf');
	const [menuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const selected = useMemo(
		() => products.find((product) => product.id === active) ?? products[0],
		[active],
	);

	return {
		active,
		select: setActive,
		menuOpen,
		toggleMenu: () => setMenuOpen((open) => !open),
		closedMenu: () => setMenuOpen(false),
		mounted,
		selected,
	};
}
