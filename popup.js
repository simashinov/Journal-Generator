function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateValues() {
    const age = parseInt(document.getElementById('age').value); // Получение выбранного возраста
    let pulseRange, respRange, bpRange;

    // Определение диапазонов значений в зависимости от возраста
    if (age <= 1) {
        pulseRange = [120, 160];
        respRange = [30, 50];
        bpRange = [80, 90];
    } else if (age <= 3) {
        pulseRange = [110, 130];
        respRange = [20, 40];
        bpRange = [90, 105];
    } else if (age <= 5) {
        pulseRange = [90, 110];
        respRange = [20, 30];
        bpRange = [95, 110];
    } else if (age <= 12) {
        pulseRange = [70, 100];
        respRange = [18, 25];
        bpRange = [100, 120];
    } else {
        pulseRange = [60, 90];
        respRange = [12, 20];
        bpRange = [110, 130];
    }

    // Генерация случайных значений в заданных диапазонах
    const pulse = getRandomInt(pulseRange[0], pulseRange[1]);
    const resp = getRandomInt(respRange[0], respRange[1]);
    const bpSystolic = getRandomInt(bpRange[0], bpRange[1]);
    const bpDiastolic = getRandomInt(60, 80); // Нижнее значение давления (диастолическое)

    // Обновление значений на странице
    document.getElementById('pulseValue').textContent = pulse;
    document.getElementById('respValue').textContent = resp;
    document.getElementById('bpValue').textContent = `${bpSystolic}/${bpDiastolic}`;
}

// Вызываем функцию генерации значений при загрузке страницы или изменении возраста
document.getElementById('age').addEventListener('change', generateValues);
window.onload = generateValues;
