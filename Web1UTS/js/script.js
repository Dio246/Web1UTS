// --- LOGIKA LOGIN (index.html) ---
function handleLogin(event) {
    event.preventDefault(); // Mencegah reload halaman
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;
    
    // Validasi data berdasarkan JSON array di data.js
    const userValid = dataPengguna.find(u => u.email === emailInput && u.password === passInput);
    
    if (userValid) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Email/password yang anda masukkan salah');
    }
}

function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// --- EVENT LISTENER DOM LOADED ---
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Logika Greeting di Dashboard
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        const jam = new Date().getHours();
        let sapaan = "Selamat Pagi";
        if (jam >= 11 && jam < 15) sapaan = "Selamat Siang";
        else if (jam >= 15 && jam < 18) sapaan = "Selamat Sore";
        else if (jam >= 18) sapaan = "Selamat Malam";
        greetingEl.textContent = `${sapaan}, Admin!`;
    }

    // 2. Logika Render Stok & Tambah Stok (stok.html)
    const stokBody = document.getElementById('stok-body');
    if (stokBody) {
        function renderTabelStok() {
            stokBody.innerHTML = '';
            dataKatalogBuku.forEach(buku => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${buku.kodeBarang}</td>
                    <td>${buku.namaBarang}</td>
                    <td>${buku.jenisBarang}</td>
                    <td>${buku.edisi}</td>
                    <td>${buku.stok}</td>
                    <td>${buku.harga}</td>
                    <td><img src="${buku.cover || 'img/default.png'}" width="50" alt="Cover ${buku.namaBarang}"></td>
                `;
                stokBody.appendChild(tr);
            });
        }
        
        renderTabelStok(); // Render awal

        // Fitur Tambah Baris DOM
        document.getElementById('form-tambah-stok').addEventListener('submit', function(e) {
            e.preventDefault();
            const kodeBaru = document.getElementById('new-kode').value;
            const namaBaru = document.getElementById('new-nama').value;
            const stokBaru = document.getElementById('new-stok').value;
            
            // Push ke array dataKatalogBuku (Manipulasi Data)
            dataKatalogBuku.push({
                kodeBarang: kodeBaru,
                namaBarang: namaBaru,
                jenisBarang: "Buku Tambahan",
                edisi: "-",
                stok: stokBaru,
                harga: "Rp -",
                cover: ""
            });
            renderTabelStok(); // Re-render tabel
            this.reset();
            alert("Data stok berhasil ditambahkan!");
        });
    }

    // 3. Logika Select Option di Halaman Pemesanan (checkout.html)
    const pilihanBuku = document.getElementById('pilihan-buku');
    if (pilihanBuku) {
        dataKatalogBuku.forEach(buku => {
            const opt = document.createElement('option');
            opt.value = buku.kodeBarang;
            opt.textContent = `${buku.namaBarang} - ${buku.harga}`;
            pilihanBuku.appendChild(opt);
        });
    }
});

// --- LOGIKA TRACKING (tracking.html) ---
function cariTracking(event) {
    event.preventDefault();
    const noDO = document.getElementById('nomorDO').value;
    const data = dataTracking[noDO];
    const resDiv = document.getElementById('tracking-result');
    
    if (data) {
        // Simulasi UI Progress Bar berbasis warna dan lebar
        let persentase = data.status === "Dikirim" ? "100%" : "50%";
        let warna = data.status === "Dikirim" ? "#27ae60" : "#f39c12"; // Hijau jika sampai, Oranye jika jalan
        
        let htmlHistori = data.perjalanan.map(p => `<li><strong>${p.waktu}</strong>: ${p.keterangan}</li>`).join('');
        
        resDiv.innerHTML = `
            <h3>Informasi Penerima: ${data.nama}</h3>
            <p><strong>Status Pengiriman:</strong> ${data.status}</p>
            <div style="background:#ddd; width:100%; height:25px; border-radius:5px; margin:10px 0; overflow:hidden;">
                <div style="background:${warna}; width:${persentase}; height:100%; color:white; text-align:center; line-height:25px; font-size:12px; transition: width 0.5s;">
                    ${data.status}
                </div>
            </div>
            <p><strong>Ekspedisi:</strong> ${data.ekspedisi} | <strong>Jenis Paket:</strong> ${data.paket}</p>
            <p><strong>Tanggal Kirim:</strong> ${data.tanggalKirim} | <strong>Total Pembayaran:</strong> ${data.total}</p>
            <hr>
            <h4>Histori Perjalanan:</h4>
            <ul>${htmlHistori}</ul>
        `;
    } else {
        resDiv.innerHTML = `<p style="color:red;">Data Delivery Order <b>${noDO}</b> tidak ditemukan. Silakan periksa kembali.</p>`;
    }
}

// Handler Submit Pemesanan
function prosesPemesanan(event) {
    event.preventDefault();
    alert("Pesanan berhasil diproses (Simulasi).");
    event.target.reset();
}