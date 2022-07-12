export const createNumbersArray = (from, to) => {
    // ф-ция должна генерировать массив чисел от from до to

    const numbersArray = [];
    for (let i = from; i <= to; i++) {
        numbersArray.push(i);
    }
    return numbersArray;
};

// const createNumbersArray = (from, to) => {
//     return new Array(to - from).fill(1).map((el, i) => el + i);
// };