export function renderRedLine() {
    const redLine = document.createElement("div");
    redLine.style.borderTop = "2px solid red"; //styles

    let currentMin = new Date().getMinutes();
    redLine.style.marginTop = `${currentMin}px`;
    redLine.style.position = "relative"; //styles

    const timeSlot = document.querySelector(
        `div[data-day="${new Date().getDate()}"] div[data-time="${new Date().getHours()}"]`
    );
    timeSlot.append(redLine);

    setInterval(() => {
        if (currentMin === new Date().getMinutes()) {
            return;
        }
        currentMin = new Date().getMinutes();
        redLine.style.marginTop = `${currentMin}px`;
    }, 1000);
}