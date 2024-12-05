/* Выводит сообщение в консоль, указывающее на готовность файла main.js */

// console.log('main.js ready');


/* Код для запуска дополнительной страницы в проекте. */

// if (!sessionStorage.getItem('linkOpened')) {
//     // Функция, которая выполняется при полной загрузке страницы
//     window.onload = function () {
//         // Открывает страницу 'test.html' в новой вкладке или окне браузера
//         window.open('test.html', '_blank');
//         // Сохраняем информацию о том, что ссылка была открыта, чтобы не открывалась повторно при обновлении основной страницы.
//         sessionStorage.setItem('linkOpened', 'true');
//     }
// }


/* Изменение текста в кубе. */

function ResponsiveText1() {
    const textElement = document.querySelector('.responsive-text-1');
    if (window.innerWidth <= 900) {
        textElement.textContent = "git-egorloiola";
    } else {
        textElement.textContent = "github.com/egorloiola";
    }
}

window.addEventListener('resize', ResponsiveText1);
window.addEventListener('load', ResponsiveText1); // Обновляем текст при загрузке страницы


/* Kubarik размытие других ссылок при наведении. */

// При наведении (mouseenter) на один из элементов <a>, добавляется класс .blur ко всем остальным элементам, кроме того, на который наведен курсор.
// При уходе курсора (mouseleave) с элемента, класс .blur удаляется у всех элементов, возвращая их в исходное состояние.

document.querySelectorAll('.kubarik--footer a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Добавляем класс 'blur' ко всем элементам, кроме текущего
        document.querySelectorAll('.kubarik--footer a').forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.add('blur');
            }
        });
    });

    link.addEventListener('mouseleave', () => {
        // Убираем класс 'blur' у всех элементов
        document.querySelectorAll('.kubarik--footer a').forEach(otherLink => {
            otherLink.classList.remove('blur');
        });
    });
});




