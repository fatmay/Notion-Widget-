function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();

    // Saati formatla
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Tarihi formatla
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('tr-TR', options);

    // HTML'e ekle
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Her saniye güncelle
setInterval(updateTime, 1000);

// Sayfa yüklendiğinde bir kere çalıştır
updateTime();