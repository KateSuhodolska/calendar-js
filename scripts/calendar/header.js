import { getItem, setItem } from "../common/storage.js";
import { generateWeekRange } from "../common/time.utils.js";
import { openModal } from "../common/modal.js";

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const renderHeader = () => {
    const currentWeek = generateWeekRange(getItem("displayedWeekStart"));

    const calendarHeader = document.querySelector(".calendar__header");
    const stringCurrentWeek = currentWeek
        .map((el) => {
            return `<div class="calendar__day-label day-label">
          <span class="day-label__day-name">${
            daysOfWeek[new Date(el).getDay()]
          }</span>
          <span class="day-label__day-number">${new Date(el).getDate()}</span>
        </div>`;

            // const calendarDayLabel = document.createElement("div");
            // calendarDayLabel.classList.add("calendar__day-label", "day-label");

            // const dayName = document.createElement("span");
            // dayName.classList.add("day-label__day-name");
            // dayName.textContent = daysOfWeek[new Date(el).getDay()];

            // const dayNumber = document.createElement("span");
            // dayNumber.classList.add("day-label__day-number");
            // dayNumber.textContent = new Date(el).getDate();

            // calendarDayLabel.append(dayName, dayNumber);
            // console.log(calendarDayLabel);
        })
        .join(" ");

    // calendarHeader.append(...stringCurrentWeek); //replace to innerHTML
    calendarHeader.innerHTML = stringCurrentWeek;
    const headerDayLabels = document.querySelectorAll(".calendar__day-label");
    headerDayLabels.forEach((el) =>
        el.setAttribute("data-time", `${new Date().getHours()}`)
    );

    // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
    // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик