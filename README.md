# Oppia World

Halaman pembuka (landing page) dan **peta link** ekosistem Oppia. Live di **https://oppia.world**.

Bukan aplikasi fungsional, melainkan sebuah hub brand yang menyajikan identitas, filosofi, dan kartu tautan ke tiap produk di bawah domain oppia.world, dirancang sebagai satu konstelasi produk ("The Oppia constellation").

## Produk yang di-tautkan (6)

| Produk           | Domain                   | Fokus                                      |
| ---------------- | ------------------------ | ------------------------------------------ |
| Moozhaf          | moozhaf.oppia.world      | Qur'an, surah & ayat, untuk kembali tiap hari |
| PICA             | pica.oppia.world         | Game belajar untuk anak 2-7 tahun          |
| Tolk             | tolk.oppia.world         | Latihan percakapan Business English (AI roleplay) |
| Toolhub          | toolhub.oppia.world      | Utilitas developer (PDF, teks, data)       |
| Writer           | write.oppia.world        | Generate ide & transform dokumen            |
| insideLab        | insidelab.oppia.world    | Lab belajar interaktif JavaScript & logika  |

## Struktur Halaman

Homepage (satu route) menyajikan beberapa bagian:

- **Header** - nav sticky
- **Hero** - pesan utama + **orbit konstelasi** (6 planet produk dapat diklik)
- **Signal strip** - janji produk
- **Products section** - selector tab produk, deskripsi & CTA + **preview visual hidup** tiap produk (mis. preview editor untuk insideLab)
- **Principles** - cara Oppia merancang ("Calm, not cold / Guidance, not noise / Delight with purpose")
- **Journeys** - daftar titik masuk per produk
- **Final CTA** dan **Footer**

## Struktur Folder & Teknologi

```
app/
  routes/home.tsx        Halaman utama (data produk + section + SEO/JSON-LD)
  app.css, brand.css     Gaya & desain sistem konstolasi
public/                  Logo & aset statis
workers/app.ts           Cloudflare Worker entry (adds nosniff headers)
```

- React Router 7 + React 19 (SSR) + TypeScript
- Tailwind CSS v4 + [lucide-react](https://lucide.dev) icons
- Cloudflare Workers (SSR)

Produk didefinisikan dalam satu array `products` di `app/routes/home.tsx` (nama, warna accent, ikon lucide, copy, href). Menambah produk baru cukup menambah entri di array itu + preview visual + posisi orbit di CSS.

## Scripts

| Perintah            | Deskripsi                          |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Jalankan dev server dengan HMR     |
| `npm run build`     | Build produksi                     |
| `npm run typecheck` | Typegen + `tsc -b`                 |
| `npm run check`     | Typecheck + build + wrangler dry-run |
| `npm run deploy`    | Deploy ke Cloudflare Workers       |

## Deployment

Deploy ke https://oppia.world via Cloudflare Worker. Halaman root yang menautkan ke semua produk Oppia World.

---

© Oppia World. All Rights Reserved.
