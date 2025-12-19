
# 🚀 Pterodactyl Panel Builder Pro

Sistem ini memungkinkan pengguna untuk membuat akun dan server Pterodactyl secara instan dengan antarmuka yang sangat modern.

## 🛠️ Instruksi Konfigurasi API Key

Untuk menghubungkan website ini ke Panel Pterodactyl asli, Anda harus menggunakan **Application API Key** dari area Admin.

### 1. Mendapatkan API Key
- Masuk ke Panel Pterodactyl Anda sebagai **Admin**.
- Pergi ke menu **Admin Control Panel** (ikon gir).
- Klik menu **Application API**.
- Klik **Create New**, berikan nama (misal: "Website Builder").
- Berikan izin (Permissions) berikut:
  - **Users**: Read & Write (PENTING: Dibutuhkan untuk membuat akun otomatis).
  - **Servers**: Read & Write (PENTING: Dibutuhkan untuk mendeploy server baru).
  - **Allocations**: Read (Untuk melihat port yang tersedia).
  - **Locations/Nodes**: Read (Untuk menentukan lokasi deployment).

### 2. Implementasi di Code (Tahapan API)
Proses pembuatan panel melibatkan dua langkah utama di backend/service:

1.  **POST `/api/application/users`**: Buat user dengan username dan password (misal: `fathan001`). Simpan `id` dari user yang baru dibuat.
2.  **POST `/api/application/servers`**: Buat server dengan menyertakan `user_id` yang didapat dari langkah pertama, beserta `node_id`, `allocation_id`, dan `egg_id`.

```javascript
// Header yang diperlukan untuk setiap request:
const headers = {
    'Authorization': `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};
```

### 3. Deployment ke Vercel
1.  Upload folder ini ke repository GitHub Anda.
2.  Di Vercel, masuk ke **Project Settings** > **Environment Variables**.
3.  Tambahkan key berikut:
    - `API_KEY`: Masukkan Application API Key Anda.
    - `PANEL_URL`: Masukkan URL panel Anda (contoh: `https://panel.myhost.com`).

## 🎨 Fitur Khusus & Logika Baru
- **Password Auto-Generate**: Password dibuat otomatis dengan format `nama + 3 angka random`. Contoh input "fathan" akan menghasilkan password seperti "fathan023".
- **Format Salin Data**: Tombol "Salin Data Panel" akan menyalin informasi dengan urutan:
    1. User
    2. Password
    3. Node
    4. Egg
    5. URL
- **FadeInDown Animation**: Modal sukses muncul dari atas dengan transisi halus dan modern.

## Catatan:
Aplikasi ini menggunakan sistem **ESM Import Maps**. Tidak perlu instalasi npm, cukup deploy folder ini langsung ke layanan hosting statis.
