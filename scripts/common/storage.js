let storage = {
    // используется для удаления события
    eventIdToDelete: null,
    // хранит дату понедельника той отображаемой недели
    displayedWeekStart: null,
    // хранит массив всех событий
    events: [{
            id: 0.7520027086457333,
            title: "Title",
            description: "Some description",
            start: new Date(2022, 6, 7, 12, 30),
            startTime: "12:46",
            end: new Date(2022, 6, 7, 15, 0),
            endTime: "13:00",
        },
        {
            id: 0.12354896875465,
            title: "Title",
            description: "Some description",
            start: new Date(2022, 6, 8, 17),
            startTime: "12:46",
            end: new Date(2022, 6, 8, 18),
            endTime: "13:00",
        },
    ],
    // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
    // ф-ция должна устанавливать значения в объект storage
    storage[key] = value;
};

export const getItem = (key) => {
    // ф-ция должна возвращать по ключу значения из объекта storage
    return storage[key];
};

// пример объекта события
const eventExample = {
    id: 0.7520027086457333, // id понадобится для работы с событиями
    title: "Title",
    description: "Some description",
    start: new Date("2020-03-17T01:10:00.000Z"),
    end: new Date("2020-03-17T04:30:00.000Z"),
};