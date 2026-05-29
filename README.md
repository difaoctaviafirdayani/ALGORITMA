# 🎮 Pokédex Mini Dashboard

Proyek mini dashboard React yang terintegrasi dengan **PokéAPI** — dibuat untuk memenuhi tugas Praktikum Integrasi API.

## 📁 Struktur Folder

```
pokemon-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point React
    ├── App.jsx               # Root component (logika utama)
    ├── constants.js          # Konstanta (warna tipe, emoji, dll)
    ├── styles.js             # Style objects & global CSS
    ├── components/
    │   ├── LoadingSpinner.jsx   # Tampilan loading
    │   ├── ErrorMessage.jsx     # Tampilan error + retry
    │   ├── SearchBar.jsx        # Input pencarian
    │   ├── TypeFilter.jsx       # Dropdown filter tipe
    │   ├── TypeBadge.jsx        # Badge warna per tipe
    │   ├── StatBar.jsx          # Bar animasi untuk base stats
    │   ├── PokemonCard.jsx      # Card tiap Pokémon di grid
    │   ├── PokemonGrid.jsx      # Grid wrapper semua card
    │   └── PokemonModal.jsx     # Modal detail Pokémon
    └── hooks/
        ├── usePokemon.js        # Custom hook: fetch list + detail
        └── useAbility.js        # Custom hook: fetch ability detail
```

## 🔌 Endpoint API yang Digunakan

| # | Endpoint | Deskripsi |
|---|---|---|
| 1 | `GET /pokemon?limit=100` | Mengambil daftar 100 Pokémon |
| 2 | `GET /pokemon/{id}` | Mengambil detail tiap Pokémon (stats, types, sprites, moves) |
| 3 | `GET /ability/{id}` | Mengambil deskripsi ability Pokémon yang dipilih |

## ✅ Checklist Ketentuan Tugas

- [x] Mengambil data minimal 2 endpoint berbeda
- [x] Menampilkan data dalam bentuk card/grid (bukan tabel)
- [x] Fitur pencarian (cari nama atau ID)
- [x] Fitur filter berdasarkan tipe (18+ tipe)
- [x] Loading state dan error handling
- [x] Responsif (mobile friendly)
- [x] Struktur komponen terpisah (bukan satu file)

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 🌐 Deployment

Deploy ke Vercel:
```bash
npm install -g vercel
vercel
```

## 📚 Referensi

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [Vite Documentation](https://vitejs.dev)
