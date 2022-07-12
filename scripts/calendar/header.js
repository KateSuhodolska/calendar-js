import { getItem, setItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { openModal } from "../common/modal.js";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const renderHeader = () => {
    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

    const currentWeek = generateWeekRange(getItem("displayedWeekStart"));

    const calendarHeader = document.querySelector(".calendar__header");
    const stringCurrentWeek = currentWeek
        .map((el) => {
            return `<div class="calendar__day-label day-label" data-day=${el.getDate()}>
          <span class="day-label__day-name">${
            daysOfWeek[new Date(el).getDay()]
          }</span>
          <span class="day-label__day-number">${new Date(el).getDate()}</span>
        </div>`;
        })
        .join(" ");

    calendarHeader.innerHTML = stringCurrentWeek;
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик