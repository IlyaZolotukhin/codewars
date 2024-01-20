function deleteNth(arr, n) {
    const count = {};
    const result = [];

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] <= n) {
            result.push(num);
        }
    }

    return result;
}

const resultArray = deleteNth([1, 1,1, 3, 3, 7, 2, 2, 2, 2], 2);
console.log(resultArray);
