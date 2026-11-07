# UTS Pemrograman Web 1 - Front-End Toko Buku Online

Proyek ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1. Aplikasi web sederhana ini mensimulasikan antarmuka (Front-End) dari sebuah toko buku online tanpa menggunakan server atau database nyata, melainkan menggunakan Array JSON pada JavaScript (`data.js`) sebagai sumber data dummy.

## 🎯 Tujuan Pembelajaran

Sesuai dengan indikator penilaian UTS, proyek ini bertujuan agar mahasiswa mampu:
1. Merancang struktur **HTML** yang semantik, valid, dan rapi.
2. Mengelola gaya antarmuka menggunakan **CSS** (eksternal) untuk tata letak yang menarik (Flexbox/Grid).
3. Menggunakan **JavaScript** untuk manipulasi DOM, validasi form, manipulasi data tabel, dan interaksi UI (pop-up, alert box).

## 📂 Struktur Folder Proyek

```text
Web1UTS/
│-- index.html       # Halaman Login
│-- dashboard.html   # Menu Utama
│-- stok.html        # Informasi Stok & Katalog
│-- checkout.html    # Halaman Pemesanan
│-- tracking.html    # Lacak Pengiriman
│
├── css/
│   └── style.css    # File stylesheet
│
├── js/
│   ├── script.js    # Logika DOM & UI
│   └── data.js      # Data dummy (JSON Array)
│
├── assets/
│   └── logo-universitas-pelita-bangsa-upb-png-svg.webp
│
└── img/
    ├── pengantar_komunikasi.jpg
    ├── manajemen_keuangan.jpg
    ├── kepemimpinan.jpg
    ├── mikrobiologi.jpg
    └── paud_perkembangan.jpg
```

## 🛠️ Langkah Kerja

1. **Struktur Basis (HTML):** Membuat lima halaman utama dengan elemen HTML semantik seperti `<header>`, `<nav>`, `<main>`, dan `<section>`.
2. **Styling & Tata Letak (CSS):** Menggunakan `style.css` untuk mengatur desain, warna, tombol, tata letak navbar (termasuk logo UPB), dan merancang modal popup.
3. **Data Dummy (JavaScript):** Menulis variabel array JSON di `data.js` untuk menyimpan data akun (email/password), data stok buku, dan histori pengiriman.
4. **Interaksi & Logika (JavaScript):** Membangun `script.js` untuk:
   - Memvalidasi login pengguna.
   - Menampilkan sapaan dinamis (Pagi/Siang/Sore) di Dashboard.
   - Merender tabel data katalog buku secara otomatis.
   - Membuat fitur form dinamis untuk menambah stok buku baru ke tabel.
   - Membuat logika pencarian resi pengiriman (Delivery Order).

## 🚀 Cara Menjalankan Aplikasi

1. Unduh atau *clone* seluruh file proyek ini dan pastikan berada dalam satu folder (misal: `Web1UTS`).
2. Pastikan file gambar screenshot (`Screenshot (116).jpg` dst) berada di folder yang sama dengan file `README.md` ini (jika ingin menampilkannya secara lokal).
3. Buka folder tersebut lalu klik dua kali pada file **`index.html`** untuk membukanya di *browser* (Chrome, Firefox, Edge, dll).
4. Untuk menguji fitur login, gunakan akun dummy berikut:
   - **Email:** `rina@gmail.com`
   - **Password:** `rina123`

## 📸 Hasil Latihan dan Screenshot

### 1. Halaman Login (`index.html`)
Halaman awal untuk mengakses sistem. Dilengkapi dengan validasi form berbasis JS. Jika email atau password salah, akan muncul alert peringatan. Tersedia juga tombol Lupa Password dan Daftar.

![Login Screen](Screenshot%20(117).jpg)
![Login Screen Filled](Screenshot%20(116).jpg)

### 2. Dashboard Menu (`dashboard.html`)
Halaman utama setelah login berhasil. Terdapat fitur "greeting" sapaan waktu lokal (contoh: "Selamat Pagi, Admin!"). Navbar sudah dilengkapi dengan logo universitas.

![Dashboard](Screenshot%20(118).jpg)

### 3. Informasi Stok / Katalog (`stok.html`)
Menampilkan tabel katalog buku yang datanya ditarik langsung dari `data.js`. Di bagian bawah terdapat form untuk menambahkan stok buku baru secara dinamis menggunakan manipulasi DOM.

![Informasi Stok](Screenshot%20(119).jpg)

### 4. Tracking Pengiriman (`tracking.html`)
Halaman simulasi pelacakan resi. Dengan memasukkan nomor Delivery Order (misal: `20230013`), sistem akan merender informasi penerima, bar status pengiriman, dan histori perjalanan.

![Tracking Pengiriman](Screenshot%20(120).jpg)

### 5. Halaman Pemesanan (`checkout.html`)
Form pemesanan yang berisi data pelanggan dan *select box* pilihan buku yang juga dirender dari data katalog. Saat disubmit, akan muncul alert konfirmasi bahwa pesanan diproses.

![Halaman Pemesanan](Screenshot%20(121).jpg)
![Pemesanan Berhasil](Screenshot%20(122).jpg)

<img width="1366" height="768" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/b8f42741-1b86-4d44-a590-21ad5519b786" />
<img width="1366" height="768" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/c33cc169-312d-4f6c-8f1d-ad1ea5105059" />
<img width="1366" height="768" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/d59cf750-0b28-412c-b99f-b7125cc08cbf" />
<img width="1366" height="768" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/01602782-a3de-4022-85c5-7964900efb42" />
<img width="1366" height="768" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/9dc4b0cb-9464-43ad-ac85-7128f82e78f5" />
<img width="1366" height="768" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/cc22382c-2e12-4c2f-a2a4-2c0bfe0a1ae2" />
<img width="1366" height="768" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/d8b5990b-42a4-41f8-b501-7e0ab8116838" />
