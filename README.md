# Personal Profile — Portofolio (React + Vite)

Deskripsi singkat
------------------

Ini adalah situs portofolio pribadi yang dibuat dengan React dan Vite, menggunakan Tailwind CSS untuk styling. Proyek ini berisi komponen untuk menampilkan hero, tentang, keahlian, portofolio, kontak, dan footer.

Fitur utama
-----------

- Halaman single-page yang responsif.
- Dibangun dengan Vite untuk pengembangan cepat (HMR).
- Styling menggunakan Tailwind CSS.
- Komponen terpisah di folder `src/components` (Hero, About, Skills, Portfolio, Contact, Footer, Navbar).

Teknologi
---------

- React 19
- Vite
- Tailwind CSS
- ESLint
- PostCSS

Persyaratan
-----------

- Node.js (disarankan v16+ atau versi LTS terbaru)
- npm (atau pnpm/yarn jika diadaptasi)

Menjalankan proyek secara lokal
------------------------------

Buka terminal (PowerShell pada Windows) di folder proyek, lalu jalankan:

```powershell
npm install
npm run dev
```

Perintah penting
----------------

- `npm run dev` — Menjalankan server pengembangan (Vite) dengan HMR.
- `npm run build` — Membangun versi produksi di folder `dist`.
- `npm run preview` — Menjalankan preview lokal dari build produksi.
- `npm run lint` — Menjalankan ESLint untuk memeriksa masalah kualitas kode.

Struktur proyek (ringkasan)
---------------------------

Berikut struktur file/ folder utama yang relevan:

- `index.html` — Template HTML utama.
- `package.json` — Dependency dan skrip npm.
- `vite.config.js` — Konfigurasi Vite.
- `tailwind.config.js` — Konfigurasi Tailwind.
- `postcss.config.js` — Konfigurasi PostCSS.
- `src/`
	- `main.jsx` — Entrypoint React.
	- `App.jsx` — Root component.
	- `index.css` — file CSS (Tailwind + custom).
	- `assets/` — Gambar dan aset statis.
	- `components/` — Komponen UI:
		- `HeroSection.jsx`
		- `AboutSection.jsx`
		- `SkillsSection.jsx`
		- `PortofolioSection.jsx`
		- `ContactSection.jsx`
		- `Navbar.jsx`
		- `Footer.jsx`

Cara membangun & deploy
-----------------------

1. Buat build produksi:

```powershell
npm run build
```

2. Anda dapat mendistribusikan folder `dist` ke layanan hosting statis seperti GitHub Pages, Netlify, Vercel, atau layanan lainnya.

Tips deployment singkat:
- Vercel: cukup hubungkan repository dan Vercel akan otomatis build (build command: `npm run build`, output: `dist`).
- Netlify: pilih folder `dist` sebagai publish directory.
- GitHub Pages: gunakan action untuk mem-publish `dist` atau gunakan package seperti `gh-pages`.

Kontribusi
----------

Jika Anda ingin berkontribusi atau menyalin proyek ini sebagai basis portofolio Anda:

1. Fork repository.
2. Buat branch baru untuk fitur/bugfix: `git checkout -b fitur-baru`.
3. Commit perubahan dan buka pull request.

Kontak
------

Untuk pertanyaan atau kolaborasi, cantumkan detail kontak Anda di sini (mis. email atau tautan LinkedIn/GitHub). Jika Anda ingin, saya bisa membantu menambahkan section kontak yang terhubung ke alamat email atau formulir.

Lisensi
-------

Tambahkan lisensi yang sesuai (mis. MIT) jika Anda berencana membagikan kode. Jika belum ada, Anda bisa menambahkan `LICENSE` file berisi lisensi MIT.

Catatan pengembang
------------------

- Skrip yang tersedia sesuai `package.json`:
	- `dev` — menjalankan `vite`
	- `build` — menjalankan `vite build`
	- `preview` — menjalankan `vite preview`
	- `lint` — menjalankan `eslint .`
- Jika ingin menambahkan TypeScript, ada paket `@types/react` dan konfigurasi tambahan yang dapat ditambahkan.

Jika Anda ingin saya tambahkan bagian khusus (mis. Cara deploy ke GitHub Pages, menambahkan badge CI/CD, atau template README dalam bahasa Inggris juga), beri tahu saya dan saya akan tambahkan.

---

Terakhir dikembangkan: Oktober 2025

