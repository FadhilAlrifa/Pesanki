document.addEventListener('DOMContentLoaded', function() {
    const menuForm = document.getElementById('menu-form');
    const formTitle = document.getElementById('form-title');
    const menuIdInput = document.getElementById('menu-id');
    const btnSave = document.getElementById('btn-save');
    const btnCancel = document.getElementById('btn-cancel');
    
    // Fungsi untuk mereset form ke mode "Tambah"
    const resetForm = () => {
        menuForm.reset();
        menuIdInput.value = '';
        formTitle.textContent = 'Tambah Menu Baru';
        btnSave.textContent = 'Simpan';
        btnCancel.style.display = 'none';
    };

    // Event listener untuk submit form (Tambah atau Edit)
    menuForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const id = menuIdInput.value;
        const nama = document.getElementById('nama').value;
        const harga = document.getElementById('harga').value;
        
        if (id) {
            // Logika untuk Edit (perbarui item yang ada)
            console.log(`Mengedit menu dengan ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
            // Di aplikasi nyata, di sini akan ada panggilan API untuk UPDATE
        } else {
            // Logika untuk Tambah (buat item baru)
            console.log(`Menambah menu baru, Nama: ${nama}, Harga: ${harga}`);
            // Di aplikasi nyata, di sini akan ada panggilan API untuk CREATE
        }
        
        // Contoh: menambahkan item baru ke daftar secara visual
        alert('Data menu berhasil disimpan! (Lihat console untuk detail)');
        resetForm();
    });
    
    // Event listener untuk tombol Batal saat mengedit
    btnCancel.addEventListener('click', resetForm);

    // Event delegation untuk tombol Edit dan Delete
    const menuListContainer = document.getElementById('menu-list-container');
    menuListContainer.addEventListener('click', function(e) {
        const target = e.target;
        const listItem = target.closest('.menu-list-item');

        if (!listItem) return;

        const id = listItem.dataset.id;
        const nama = listItem.querySelector('h4').textContent;
        const harga = listItem.querySelector('p').textContent.replace('Rp ', '').replace('.', '');

        // Tombol Edit
        if (target.closest('.btn-edit')) {
            formTitle.textContent = 'Edit Menu';
            menuIdInput.value = id;
            document.getElementById('nama').value = nama;
            document.getElementById('harga').value = parseInt(harga);
            // Anda bisa mengisi field lainnya di sini
            
            btnSave.textContent = 'Simpan Perubahan';
            btnCancel.style.display = 'inline-block';
            
            window.scrollTo(0, 0); // Scroll ke atas untuk melihat form
        }

        // Tombol Delete
        if (target.closest('.btn-delete')) {
            if (confirm(`Apakah Anda yakin ingin menghapus "${nama}"?`)) {
                listItem.remove();
                console.log(`Menghapus menu dengan ID: ${id}`);
                // Di aplikasi nyata, di sini akan ada panggilan API untuk DELETE
                alert(`"${nama}" berhasil dihapus.`);
            }
        }
    });
});
