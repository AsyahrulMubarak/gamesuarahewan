// Fungsi yang dipanggil saat gambar diklik di HTML
function putarSuara(namaHewan) {
    // Ambil elemen audio tersembunyi
    const audio = document.getElementById('player-audio');
    
    // Tentukan sumber suara berdasarkan nama hewan yang diklik
    // Asumsinya file suara Anda ada di folder 'suara/' dan formatnya .mp3
    audio.src = 'suara/' + namaHewan + '.mp3';
    
    // Putar suaranya
    // Jika suara sebelumnya sedang berputar, ia akan otomatis berganti ke suara baru
    audio.play();
}