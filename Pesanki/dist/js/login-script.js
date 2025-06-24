// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function () {

    /**
     * Fungsi untuk menginisialisasi fitur lihat/sembunyikan password
     * @param {string} toggleId - ID dari elemen ikon mata (i)
     * @param {string} passwordId - ID dari elemen input password
     */
    function initializePasswordToggle(toggleId, passwordId) {
        const toggleElement = document.getElementById(toggleId);
        const passwordElement = document.getElementById(passwordId);

        // Pastikan kedua elemen ada sebelum menambahkan event listener
        if (toggleElement && passwordElement) {
            toggleElement.addEventListener('click', function () {
                // Ubah tipe input dari password ke text atau sebaliknya
                const type = passwordElement.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordElement.setAttribute('type', type);
                
                // Ubah ikon mata
                this.classList.toggle('fa-eye-slash');
            });
        }
    }

    // Inisialisasi untuk setiap field password yang ada di halaman
    initializePasswordToggle('togglePassword', 'password');
    initializePasswordToggle('toggleConfirmPassword', 'confirm-password');

});