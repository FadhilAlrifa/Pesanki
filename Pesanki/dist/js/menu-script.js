document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus kelas 'is-active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('is-active'));
            // Tambahkan kelas 'is-active' ke tombol yang diklik
            this.classList.add('is-active');

            const filterValue = this.getAttribute('data-filter');

            // Tampilkan atau sembunyikan item menu berdasarkan filter
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                // Gunakan style.display untuk men-toggle item
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'flex'; // atau 'grid', sesuaikan dengan CSS Anda
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
            // ----- KODE UNTUK NAVBAR TOGGLE (SUDAH ADA) -----
            const navToggle = document.getElementById('header-nav-toggle');
            const navMenu = document.getElementById('header-nav-menu');
            if (navToggle && navMenu) {
                navToggle.addEventListener('click', function () {
                    navMenu.classList.toggle('is-active');
                    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('is-active'));
                });
            }

            // ----- KODE BARU UNTUK NAVIGASI AKTIF -----
            // 1. Dapatkan path halaman saat ini (misal: "/menu.html")
            const currentPagePath = window.location.pathname;

            // 2. Dapatkan semua link di dalam navigasi utama
            const navLinks = document.querySelectorAll('.header-nav-menu .list-reset > li > a');

            // 3. Loop melalui setiap link
            navLinks.forEach(link => {
                // Dapatkan href dari link (misal: "menu.html")
                const linkPath = link.getAttribute('href');

                // 4. Periksa apakah path halaman saat ini diakhiri dengan path link
                // Ini cara yang andal untuk mencocokkan, bahkan jika URL lengkapnya berbeda
                if (currentPagePath.endsWith(linkPath)) {
                    // 5. Jika cocok, tambahkan kelas 'is-active'
                    link.classList.add('is-active');
                }
            });
        });