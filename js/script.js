// Получаем все ссылки с атрибутом href, которые начинаются с #
const smoothLinks = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события клика на каждую ссылку
smoothLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Отключаем стандартное поведение ссылки

        const targetId = link.getAttribute("href").substring(1); // Получаем ID элемента
        const targetElement = document.getElementById(targetId); // Находим элемент по ID

        if (targetElement) {
            // Используем метод scrollIntoView для плавной прокрутки
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});