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

// Sayfa yüklendiðinde bir kere çalýþtýr
updateTime();

// Kontrolleri ekle
document.getElementById('bgColor').addEventListener('input', function () {
    document.getElementById('widget').style.backgroundColor = this.value;
});

document.getElementById('textColor').addEventListener('input', function () {
    document.getElementById('widget').style.color = this.value;
});

document.getElementById('fontFamily').addEventListener('change', function () {
    document.getElementById('widget').style.fontFamily = this.value;
});

document.getElementById('fontSize').addEventListener('input', function () {
    document.getElementById('time').style.fontSize = `${this.value}px`;
    document.getElementById('date').style.fontSize = `${this.value / 2}px`;
});

document.getElementById('widgetWidth').addEventListener('input', function () {
    document.getElementById('widget').style.width = `${this.value}px`;
});

document.getElementById('widgetHeight').addEventListener('input', function () {
    document.getElementById('widget').style.height = `${this.value}px`;
});