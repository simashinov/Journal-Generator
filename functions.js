// После загрузки страницы привязываем события к кнопкам
window.onload = function() {
    // Кнопка для генерации справки
    document.getElementById('generateDocBtn').addEventListener('click', generateDocument);

    // Кнопка для копирования справки
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
}

function generateDocument() {
    var greenTextElements = document.querySelectorAll('.green-text');
    greenTextElements.forEach(function(el) {
        el.classList.remove('green-text');
    });
    alert("Справка сгенерирована!");
}

function copyToClipboard() {
    var content = document.querySelector('.container').innerText;
    navigator.clipboard.writeText(content).then(function() {
        alert("Скопировано в буфер обмена!");
    });
}
