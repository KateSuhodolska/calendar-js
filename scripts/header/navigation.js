import { getItem, setItem } from "../common/storage.js";
import { renderWeek } from "../calendar/calendar.js";
import { renderHeader } from "../calendar/header.js";
import { getStartOfWeek, getDisplayedMonth } from "../common/time.utils.js";
import shmoment from "../common/shmoment.js";

const navElem = document.querySelector(".navigation");
const displayedMonthElem = document.querySelector(
    ".navigation__displayed-month"
);

function renderCurrentMonth() {
    displayedMonthElem.textContent = getDisplayedMonth(
        getItem("displayedWeekStart")
    );

    // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
    // вставить в .navigation__displayed-month
}

const onChangeWeek = (event) => {
    const nextWeeks = event.target.closest(".fa-chevron-right");
    if (nextWeeks) {
        setItem(
            "displayedWeekStart",
            shmoment(getItem("displayedWeekStart")).add("days", 7).result()
        );
    }

    const previousWeeks = event.target.closest(".fa-chevron-left");
    if (previousWeeks) {
        setItem(
            "displayedWeekStart",
            shmoment(getItem("displayedWeekStart")).subtract("days", 7).result()
        );
    }

    renderCurrentMonth();
    renderHeader();
    renderWeek();
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener("click", onChangeWeek);
};