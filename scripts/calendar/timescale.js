import { createNumbersArray } from "../common/createNumbersArray.js";

const getTimeSlot = (time, format) => `<div class="time-slot">
    <span class="time-slot__time">${time} ${format}</span>
    </div>`;

export const renderTimescale = () => {
    const timeScale = document.querySelector(".calendar__time-scale");

    const timeScaleSlots = createNumbersArray(1, 24);
    const stringTimeSlots = timeScaleSlots
        .map((el) => {
            if (el < 12) {
                return getTimeSlot(el, "AM");
            }
            if (el === 12) {
                return getTimeSlot(el, "PM");
            }
            if (el > 12) {
                return getTimeSlot(el - 12, "PM");
            }
        })
        .join("");
    timeScale.innerHTML = stringTimeSlots;

    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
};