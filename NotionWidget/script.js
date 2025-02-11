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

    // Analog saat için açýlarý hesapla
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour * 30) + (minute * 0.5);
    const minuteDeg = (minute * 6) + (second * 0.1);
    const secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
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

document.getElementById('bgGif').addEventListener('input', function () {
    const widget = document.getElementById('widget');
    if (this.value) {
        widget.style.backgroundImage = `url('${this.value}')`;
        widget.style.backgroundSize = 'cover';
    } else {
        widget.style.backgroundImage = 'none';
    }
});

// Dijital ve analog saat arasýnda geçiþ yap
document.getElementById('toggleMode').addEventListener('click', function () {
    const digitalClock = document.getElementById('digitalClock');
    const analogClock = document.getElementById('analogClock');
    const toggleButton = document.getElementById('toggleMode');

    if (digitalClock.style.display === 'block') {
        digitalClock.style.display = 'none';
        analogClock.style.display = 'block';
        toggleButton.textContent = 'Dijital Saate Geç';
    } else {
        digitalClock.style.display = 'block';
        analogClock.style.display = 'none';
        toggleButton.textContent = 'Analog Saate Geç';
    }
});