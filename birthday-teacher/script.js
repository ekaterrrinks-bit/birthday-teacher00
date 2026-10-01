// Конфетти функция
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#fd79a8', '#a29bfe', '#8b6f47'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Случайные параметры
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 2;
        const size = 5 + Math.random() * 10;
        
        // Случайная форма
        const shapes = ['50%', '0%', '20%'];
        const borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
        
        confetti.style.left = left + '%';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = borderRadius;
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';
        
        container.appendChild(confetti);
        
        // Удаляем после анимации
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Запуск конфетти при загрузке страницы
window.addEventListener('load', () => {
    setTimeout(createConfetti, 500);
});

// Кнопка для повторного запуска
document.getElementById('confettiBtn').addEventListener('click', createConfetti);

// Проверка загрузки фото
const photo = document.getElementById('teacherPhoto');
const placeholder = document.getElementById('photoPlaceholder');

photo.addEventListener('load', () => {
    photo.classList.add('loaded');
    placeholder.classList.add('hidden');
});

photo.addEventListener('error', () => {
    // Если фото не найдено, показываем плейсхолдер
    photo.classList.remove('loaded');
    placeholder.classList.remove('hidden');
});

// Если фото уже загружено (кэш)
if (photo.complete && photo.naturalWidth !== 0) {
    photo.classList.add('loaded');
    placeholder.classList.add('hidden');
}
