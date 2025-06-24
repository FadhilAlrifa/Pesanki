document.addEventListener('DOMContentLoaded', function() {
    
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    const calculateTotals = () => {
        const orderItems = document.querySelectorAll('.order-item');
        let subtotal = 0;

        orderItems.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.dataset.quantity, 10);
            subtotal += price * quantity;
        });

        const tax = subtotal * 0.11;
        const total = subtotal + tax;

        document.getElementById('summary-subtotal').textContent = formatRupiah(subtotal);
        document.getElementById('summary-tax').textContent = formatRupiah(tax);
        document.getElementById('summary-total').textContent = formatRupiah(total);
    };

    // Panggil fungsi kalkulasi saat halaman dimuat
    calculateTotals();

    // Fungsionalitas untuk tombol hapus
    document.querySelectorAll('.order-item-remove').forEach(button => {
        button.addEventListener('click', function() {
            const itemToRemove = this.closest('.order-item');
            itemToRemove.remove();
            // Hitung ulang total setelah item dihapus
            calculateTotals();
        });
    });

});
