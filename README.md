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

![Login Screen](<img width="1366" height="768" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/4efe5831-0ac2-41a4-a147-9d1521f60707" />
)
![Login Screen Filled](<img width="1366" height="768" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/f8da98e4-d585-450b-82a0-b131190d088e" />
)

### 2. Dashboard Menu (`dashboard.html`)
Halaman utama setelah login berhasil. Terdapat fitur "greeting" sapaan waktu lokal (contoh: "Selamat Pagi, Admin!"). Navbar sudah dilengkapi dengan logo universitas.

![Dashboard](<img width="1366" height="768" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/0619fe19-5ace-4934-84a0-091409768482" />
)

### 3. Informasi Stok / Katalog (`stok.html`)
Menampilkan tabel katalog buku yang datanya ditarik langsung dari `data.js`. Di bagian bawah terdapat form untuk menambahkan stok buku baru secara dinamis menggunakan manipulasi DOM.

![Informasi Stok](<img width="1366" height="768" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/e2ed38a9-1d0c-45cc-b509-35c2c00b39cd" />
)

### 4. Tracking Pengiriman (`tracking.html`)
Halaman simulasi pelacakan resi. Dengan memasukkan nomor Delivery Order (misal: `20230013`), sistem akan merender informasi penerima, bar status pengiriman, dan histori perjalanan.

![Tracking Pengiriman](<img width="1366" height="768" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/1d0fd1d7-e8e8-456a-84a2-869526c68068" />
)

### 5. Halaman Pemesanan (`checkout.html`)
Form pemesanan yang berisi data pelanggan dan *select box* pilihan buku yang juga dirender dari data katalog. Saat disubmit, akan muncul alert konfirmasi bahwa pesanan diproses.

![Halaman Pemesanan](<img width="1366" height="768" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/639f8327-0666-449e-b949-dc576a9561ca" />
)
![Pemesanan Berhasil](<img width="1366" height="768" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/e9a05257-e6b7-4132-9af1-c8ea46f9d44d" />
)

