const modalElem = document.querySelector(".modal");
const modalContentElem = document.querySelector(".modal__content");
const createButton = document.querySelector(".create-event-btn");

// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана

export function openModal() {
    modalElem.classList.remove("hidden");
    modalElem.style.margin = "auto";
}

export function closeModal() {
    modalElem.classList.add("hidden");
}

function onClickInsideModal(event) {
    event.stopPropagation();
}

modalContentElem.addEventListener("click", onClickInsideModal);
modalElem.addEventListener("click", closeModal);
createButton.addEventListener("click", openModal);