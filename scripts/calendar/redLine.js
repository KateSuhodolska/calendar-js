import { getItem, setItem } from "../common/storage.js";
import shmoment from "../common/shmoment.js";

export function renderRedLine() {
    const redLine = document.createElement("div");
    redLine.style.borderTop = "2px solid red"; //styles

    let currentMin = new Date().getMinutes();
    redLine.style.marginTop = `${currentMin}px`;
    redLine.style.position = "relative"; //styles

    const timeSlot = document.querySelector(
        `div[data-day="${new Date().getDate()}"] div[data-time="${new Date().getHours()}"]`
    );
    if (
        getItem(displayedWeekStart) <=
        shmoment(currentWeek).add("days", 7).result() &&
        getItem(displayedWeekStart) >= currentWeek
    ) {
        timeSlot.append(redLine);
    }
    el.start <= shmoment(currentWeek).add("days", 7).result() &&
        el.start >= currentWeek;

    setInterval(() => {
        if (currentMin === new Date().getMinutes()) {
            return;
        }
        currentMin = new Date().getMinutes();
        redLine.style.marginTop = `${currentMin}px`;
    }, 1000);
}