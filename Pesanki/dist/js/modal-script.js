document.addEventListener('DOMContentLoaded', function () {
    // Pastikan elemen-elemen ini ada sebelum melanjutkan
    const modal = document.getElementById('order-modal');
    if (!modal) {
        console.log('Elemen modal tidak ditemukan. Script modal dihentikan.');
        return; 
    }

    // Elemen-elemen Modal
    const closeModalBtn = document.getElementById('modal-close-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    // UBAH BARIS INI: Gunakan selector yang mencakup kedua jenis tombol pesan
    const allOrderButtons = document.querySelectorAll('.order-button, .order-button1'); 
    
    const modalImage = document.getElementById('modal-item-image');
    const modalName = document.getElementById('modal-item-name');
    const modalPrice = document.getElementById('modal-item-price');
    const quantityInput = document.getElementById('quantity-input');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const subtotalPrice = document.getElementById('subtotal-price');
    let currentPrice = 0;

    // Fungsi untuk format angka ke Rupiah
    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

    // Fungsi untuk update subtotal
    const updateSubtotal = () => {
        const quantity = parseInt(quantityInput.value);
        const subtotal = quantity * currentPrice;
        subtotalPrice.textContent = formatRupiah(subtotal);
    };

    // Fungsi untuk membuka modal
    const openModal = (item) => {
        currentPrice = parseFloat(item.dataset.harga);
        modalImage.src = item.dataset.gambar;
        modalName.textContent = item.dataset.nama;
        modalPrice.textContent = formatRupiah(currentPrice);
        quantityInput.value = 1;
        document.getElementById('order-notes').value = ''; // Kosongkan catatan
        updateSubtotal();
        modal.classList.add('is-visible');
    };

    // Fungsi untuk menutup modal
    const closeModal = () => modal.classList.remove('is-visible');

    // Event listener untuk setiap tombol order
    allOrderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            // UBAH BARIS INI: Cari elemen induk yang merupakan kartu menu, baik di index.html maupun menu.html
            const menuItem = this.closest('.menu-card, .menu-item'); 
            if (menuItem) {
                openModal(menuItem);
            }
        });
    });

    // Event listener untuk tombol kuantitas
    if(btnPlus) {
        btnPlus.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateSubtotal();
        });
    }

    if(btnMinus) {
        btnMinus.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateSubtotal();
            }
        });
    }

    // Event listener untuk menutup modal
    if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if(cancelBtn) cancelBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        if (event.target == modal) closeModal();
    });
});