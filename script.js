document.addEventListener("DOMContentLoaded", function() {
    const tombol = document.getElementById('tombol-tampil');
    const ucapanUtama = document.getElementById('ucapan-utama');
    const ucapanTambahan = document.getElementById('ucapan-tambahan');

    tombol.addEventListener('click', function() {
        // Teks ucapan
        const nama = "Esriwanty Sitinjak";
        const usia = 32;

        // Mengubah teks di halaman HTML
        ucapanUtama.textContent = `Selamat ulang tahun yang ke-${usia}, ${nama}! 🎉`;
        ucapanTambahan.textContent = "Semoga sehat selalu, panjang umur, dan diberkati Tuhan Yesus.";

        // Menyembunyikan tombol setelah diklik
        tombol.style.display = 'none';
    });
});