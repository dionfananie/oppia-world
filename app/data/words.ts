import batch01 from './word-batches/batch-01.json';
import batch02 from './word-batches/batch-02.json';
import batch03 from './word-batches/batch-03.json';
import batch04 from './word-batches/batch-04.json';
import batch05 from './word-batches/batch-05.json';
import batch06 from './word-batches/batch-06.json';
import batch07 from './word-batches/batch-07.json';
import batch08 from './word-batches/batch-08.json';
import batch09 from './word-batches/batch-09.json';
import batch10 from './word-batches/batch-10.json';
import batch11 from './word-batches/batch-11.json';
import batch12 from './word-batches/batch-12.json';
import batch13 from './word-batches/batch-13.json';
import batch14 from './word-batches/batch-14.json';
import batch15 from './word-batches/batch-15.json';
import batch16 from './word-batches/batch-16.json';
import batch17 from './word-batches/batch-17.json';
import batch18 from './word-batches/batch-18.json';
import batch19 from './word-batches/batch-19.json';
import batch20 from './word-batches/batch-20.json';
import batch21 from './word-batches/batch-21.json';
import batch22 from './word-batches/batch-22.json';
import batch23 from './word-batches/batch-23.json';
import batch24 from './word-batches/batch-24.json';
import batch25 from './word-batches/batch-25.json';

/** Satu kosakata (gambar) pada dataset 500 kata. */
export type Word = {
	id: number;
	category: string;
	en: string;
	ko: string;
	image: string;
};

/** Seluruh kosakata, digabung dari 25 batch, diurutkan berdasarkan id. */
export const words: Word[] = [
	...batch01,
	...batch02,
	...batch03,
	...batch04,
	...batch05,
	...batch06,
	...batch07,
	...batch08,
	...batch09,
	...batch10,
	...batch11,
	...batch12,
	...batch13,
	...batch14,
	...batch15,
	...batch16,
	...batch17,
	...batch18,
	...batch19,
	...batch20,
	...batch21,
	...batch22,
	...batch23,
	...batch24,
	...batch25,
].sort((a, b) => a.id - b.id);

/** Daftar kategori unik dalam urutan kemunculannya di data. */
export const categories: string[] = Array.from(
	new Set(words.map((word) => word.category)),
);

/** Prefix path endpoint proxy gambar di worker. */
export const IMAGE_PATH = '/api/assets/images';
