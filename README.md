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

![Login Screen](https://private-user-images.githubusercontent.com/73042916/698667364-982488ff-1f25-4254-bc27-ccb2e0fa8a99.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU1ODYsIm5iZiI6MTc5NDA4NTI4NiwicGF0aCI6Ii83MzA0MjkxNi82OTg2NjczNjQtOTgyNDg4ZmYtMWYyNS00MjU0LWJjMjctY2NiMmUwZmE4YTk5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDEyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3MmZlZTEzYjUzZDE2MmE5MmM5M2VkNjQzNjQ4OTRlYTA5ZjczN2VkZDQyOWI3MDRmMDAyZGU2NGNmMzU5M2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.iByqelz2LYb9qy9rF3Semcpt6TqxZ8ASznGxJ7YJ8bg)
![Login Screen Filled](https://private-user-images.githubusercontent.com/73042916/698667389-a662d4a4-eb93-4145-b188-c5b025463f04.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU2OTEsIm5iZiI6MTc5NDA4NTM5MSwicGF0aCI6Ii83MzA0MjkxNi82OTg2NjczODktYTY2MmQ0YTQtZWI5My00MTQ1LWIxODgtYzViMDI1NDYzZjA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDMxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5Y2JlZThiZmZmNzIxZjlkNjdjNzUyNTY4MGFiMDhlYzZhMmYyYTg1NGI2OWY1N2Q5MjZhNWYxMDM1MDZjMDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.kCQVSFHYuNDbivmKoOnwfwx4xia33pU1iora4mrga1U)

### 2. Dashboard Menu (`dashboard.html`)
Halaman utama setelah login berhasil. Terdapat fitur "greeting" sapaan waktu lokal (contoh: "Selamat Pagi, Admin!"). Navbar sudah dilengkapi dengan logo universitas.

![Dashboard](https://private-user-images.githubusercontent.com/73042916/698667407-803b9f6d-2bd7-47f0-9cf6-8e5ae7d5e0ad.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU3NzMsIm5iZiI6MTc5NDA4NTQ3MywicGF0aCI6Ii83MzA0MjkxNi82OTg2Njc0MDctODAzYjlmNmQtMmJkNy00N2YwLTljZjYtOGU1YWU3ZDVlMGFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDQzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4MTI5MmE4YjA1MzllYTljM2NmZmE2ZDU2MDY4MmE0YzhkOWM2OTUzMGU3Yzk5ZDljOGQ3ZDBlODczM2I5ZDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.-VFfWS0080qJguuM2S9WIAlQS1Pug8zn9Qerp3ukjIQ)

### 3. Informasi Stok / Katalog (`stok.html`)
Menampilkan tabel katalog buku yang datanya ditarik langsung dari `data.js`. Di bagian bawah terdapat form untuk menambahkan stok buku baru secara dinamis menggunakan manipulasi DOM.

![Informasi Stok](https://private-user-images.githubusercontent.com/73042916/698667425-9394f45c-1049-400d-b257-1909f9b1b824.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU4MzksIm5iZiI6MTc5NDA4NTUzOSwicGF0aCI6Ii83MzA0MjkxNi82OTg2Njc0MjUtOTM5NGY0NWMtMTA0OS00MDBkLWIyNTctMTkwOWY5YjFiODI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDUzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlZDY2YWZmZWRlOGIwNzljZTgzMDdmY2FiYTUyODZiNDE3NTAzNWI4OTZlMWIyMzhmNWIxN2VmZjFlZjg3NjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.r3IgipGGxwmBFH0Ih-Mq41_xA_KYFij_ZmjZ7PVv8EQ)

### 4. Tracking Pengiriman (`tracking.html`)
Halaman simulasi pelacakan resi. Dengan memasukkan nomor Delivery Order (misal: `20230013`), sistem akan merender informasi penerima, bar status pengiriman, dan histori perjalanan.

![Tracking Pengiriman](https://private-user-images.githubusercontent.com/73042916/698667441-482a6b4b-af62-4518-bb98-88f8aeaf8bb3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU4ODUsIm5iZiI6MTc5NDA4NTU4NSwicGF0aCI6Ii83MzA0MjkxNi82OTg2Njc0NDEtNDgyYTZiNGItYWY2Mi00NTE4LWJiOTgtODhmOGFlYWY4YmIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDYyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk0MDFjNGQ4YmQ1MmM1Nzc3ZGYwYjQ0ZTQ1NjVhNDM3MWYxMTE2YjQyNzAwOTQzZjM2NDY3MDgxYzY0YmU5NjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.pTZqCo48JheBKIoYMddxg8rAAXSZQrATEhznNXu-Hv0)

### 5. Halaman Pemesanan (`checkout.html`)
Form pemesanan yang berisi data pelanggan dan *select box* pilihan buku yang juga dirender dari data katalog. Saat disubmit, akan muncul alert konfirmasi bahwa pesanan diproses.

![Halaman Pemesanan](https://private-user-images.githubusercontent.com/73042916/698667457-7aa3ab4c-02f8-4a36-a8b3-4e94043b52ea.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU5MjcsIm5iZiI6MTc5NDA4NTYyNywicGF0aCI6Ii83MzA0MjkxNi82OTg2Njc0NTctN2FhM2FiNGMtMDJmOC00YTM2LWE4YjMtNGU5NDA0M2I1MmVhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDcwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJlYzMzMTFiNmJkODg1YWIzODRlOTI0ZTA4MTk4NTRmNzRiYWNhODUwMTA0MDgxMzdjNGE0OTgyM2IyMDhlMDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.0jjey7hVyckThWUtT3o5UC0WEz-KDHOS4OTgDk44aJU)
![Pemesanan Berhasil](https://private-user-images.githubusercontent.com/73042916/698667475-1b74eeac-d796-4f35-bd31-295cc3091681.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQwODU5NjEsIm5iZiI6MTc5NDA4NTY2MSwicGF0aCI6Ii83MzA0MjkxNi82OTg2Njc0NzUtMWI3NGVlYWMtZDc5Ni00ZjM1LWJkMzEtMjk1Y2MzMDkxNjgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTA3VDIxMDc0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5YzhkOTc4NzJlNjg2NTdhMjFiNDNjMjg0OWNkYjcxYmQ2YzE0NDBlNmJhZDE4YTI0OTRmOTRkODhmZTU2NTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.sImkhVkoBr7S__WSA-j5QJHokF-FqSZpi-3ghFs-AGY)

# Link YouTube: (https://youtu.be/IFXCiwm6Tqk?si=VdlsYPb5PdF0k4PW)
