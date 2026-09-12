import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
	query: string;
	onChange: (query: string) => void;
};

/** Input pencarian dengan debounce agar tidak memicu fetch di tiap ketukan. */
export function SearchBar({ query, onChange }: SearchBarProps) {
	const [value, setValue] = useState(query);

	useEffect(() => {
		setValue(query);
	}, [query]);

	useEffect(() => {
		const timer = setTimeout(() => onChange(value), 300);
		return () => clearTimeout(timer);
	}, [value, onChange]);

	return (
		<label className="relative block w-full max-w-md">
			<Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-black/40" />
			<input
				type="search"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder="Search by English or Korean…"
				className="w-full rounded-full border border-black/15 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-black/40"
			/>
		</label>
	);
}
