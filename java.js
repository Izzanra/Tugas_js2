document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pendidikanForm');

    form.addEventListener('submit', (event) => {
        let valid = true;

        // Validasi Nama
        const nama = document.getElementById('nama').value;
        const namaError = document.getElementById('namaError');
        const namaValid = /^[a-zA-Z\s]+$/.test(nama);
        if (!namaValid) {
            namaError.textContent = 'Nama hanya boleh mengandung huruf dan spasi.';
            valid = false;
        } else {
            namaError.textContent = '';
        }

        // Validasi Email
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValid) {
            emailError.textContent = 'Format email tidak valid.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Validasi NIK
        const nik = document.getElementById('nik').value;
        const nikError = document.getElementById('nikError');
        const nikValid = /^\d+$/.test(nik);
        if (!nikValid) {
            nikError.textContent = 'NIK hanya boleh mengandung angka.';
            valid = false;
        } else {
            nikError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
