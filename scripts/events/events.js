import { getItem, setItem } from "../common/storage.js";
import shmoment from "../common/shmoment.js";
import { openPopup, closePopup } from "../common/popup.js";
import { renderWeek } from "../calendar/calendar.js";

const weekElem = document.querySelector(".calendar__week");
const deleteEventBtn = document.querySelector(".delete-event-btn");

function handleEventClick(event) {
    // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
    // установите eventIdToDelete с id события в storage

    const isTarget = event.target.classList.contains("event-container");
    if (isTarget) {
        openPopup(event.pageX, event.pageY);
    }
    setItem("eventIdToDelete", event.target.dataset.id);
}

function removeEventsFromCalendar() {
    // ф-ция для удаления всех событий с календаря
    weekElem.innerHTML = "";
    renderWeek();
}

const createEventElement = (event) => {
    // ф-ция создает DOM элемент события
    // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
    // нужно добавить id события в дата атрибут
    // здесь для создания DOM элемента события используйте document.createElement

    const eventContainer = document.createElement("div");
    eventContainer.classList.add("event-container");
    eventContainer.dataset.id = event.id;

    eventContainer.innerHTML = `<span class="event__title">${event.title}</span><span class="event__time">${event.startTime} - ${event.endTime}</span>`;

    eventContainer.style.top = `${new Date(event.start).getMinutes()}px`;
    eventContainer.style.height = `${
    (Date.parse(event.end) - Date.parse(event.start)) / 1000 / 60
  }px`;

    return eventContainer;
};

export const renderEvents = () => {
    // достаем из storage все события и дату понедельника отображаемой недели
    // фильтруем события, оставляем только те, что входят в текущую неделю
    // создаем для них DOM элементы с помощью createEventElement
    // для каждого события находим на странице временную ячейку (.calendar__time-slot)
    // и вставляем туда событие
    // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
    // не забудьте удалить с календаря старые события перед добавлением новых

    const allEvents = getItem("events");
    const currentWeek = new Date(getItem("displayedWeekStart"));

    allEvents
        .filter(
            (el) =>
            new Date(el.start) <= shmoment(currentWeek).add("days", 7).result() &&
            new Date(el.start) >= currentWeek
        )
        .map((el) => {
            const dataTime = new Date(el.start).getHours();
            const dataDay = new Date(el.start).getDate();

            const timeSlot = document.querySelector(
                `div[data-day="${dataDay}"] div[data-time="${dataTime}"]`
            );
            const eventEl = createEventElement(el);
            timeSlot.append(eventEl);
        });
};

function onDeleteEvent() {
    // достаем из storage массив событий и eventIdToDelete
    // удаляем из массива нужное событие и записываем в storage новый массив
    // закрыть попап
    // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)

    const allEvents = getItem("events");
    const eventToDelete = getItem("eventIdToDelete");
    const filterEvents = allEvents.filter(
        (el) => Number(el.id) !== Number(eventToDelete)
    );
    setItem("events", filterEvents);
    closePopup();
    renderWeek();
}

weekElem.addEventListener("click", handleEventClick);
deleteEventBtn.addEventListener("click", onDeleteEvent);