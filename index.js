// Функция для вывода сообщения в консоль
function displayMessage() {
    console.log('Я учу JavaScript!');
}

// Вызов функции для вывода сообщения
displayMessage();

// Управление галереей

function prevImage() {
    const imgElement = document.getElementById('image');
    let current = parseInt(imgElement.getAttribute('data-current'));

    if (current === 1) {
        imgElement.src = 'image3.jpg';  
        imgElement.setAttribute('data-current', 3);
    } else if (current === 2) {
        imgElement.src = 'image1.jpg';
        imgElement.setAttribute('data-current', 1);
    } else if (current === 3) {
        imgElement.src = 'image2.jpg';
        imgElement.setAttribute('data-current', 2);
    }
}

// Функция для переключения на следующее изображение
function nextImage() {
    const imgElement = document.getElementById('image');
    let current = parseInt(imgElement.getAttribute('data-current'));

    if (current === 1) {
        imgElement.src = 'image2.jpg';
        imgElement.setAttribute('data-current', 2);
    } else if (current === 2) {
        imgElement.src = 'image3.jpg';
        imgElement.setAttribute('data-current', 3);
    } else if (current === 3) {
        imgElement.src = 'image1.jpg';
        imgElement.setAttribute('data-current', 1);
    }
}