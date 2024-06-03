
$('.menu__link, .menu__btn').on('click', function () {
  $('.menu__items, .menu__btn').toggleClass('active');
});

// Создаем объект Date

const today = new Date();

// Получаем текущую дату в формате ДД-ММ-ГГГГ
const day = today.getDate();
const month = today.getMonth() + 1; // Январь это 0!
const year = today.getFullYear();

// Форматируем дату
const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

// Находим элемент с id="current-date" и вставляем туда дату
document.getElementById('current-date').innerText = formattedDate;

//  для маски
$(document).ready(function () {
  $('#phone').mask('+38(000)000-00-00');
});

// таймер обратного отщета
// Устанавливаем время окончания (текущая дата и время + 2 часа)
const endTime = new Date().getTime() + 2 * 60 * 60 * 1000;

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Время истекло";
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    (hours > 0 ? hours + ":" : "") +
    (minutes < 10 && hours > 0 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}

const interval = setInterval(updateTimer, 1000);

$(".menu a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  tops = top - 80;
  $('body,html').animate({ scrollTop: tops }, 1500);
});
