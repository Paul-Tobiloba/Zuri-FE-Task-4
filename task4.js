//Q1 - convertFahrToCelsius
const convertFahrToCelsius = (n) => {
    let valueType = typeof n;
    if (isNaN(n) || n === null) {
        return `'${n}' is not a valid number but a/an ${valueType}`;
    } else {
        let fToC = (n - 32) / 1.8;
        let result = `${n}\xB0F is ${fToC.toFixed(4)}\xB0C.`;
        return result;
    }
};
convertFahrToCelsius(null);

//Q2 - checkYuGiOh

const checkYuGiOh = (n) => {
    let arr = [];
    if (isNaN(n) || n === null) {
        return `invalid parameter: '${n}'`;
    } else {
        for (let i = 1; i <= n; i++) {
            if (n === 1) {
                return 1;
            } else {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    arr.push("yu-gi-oh");
                } else if (i % 2 === 0 && i % 3 === 0) {
                    arr.push("yu-gi");
                } else if (i % 2 === 0 && i % 5 === 0) {
                    arr.push("yu-oh");
                } else if (i % 3 === 0 && i % 5 === 0) {
                    arr.push("gi-oh");
                } else if (i % 2 === 0) {
                    arr.push("yu");
                } else if (i % 3 === 0) {
                    arr.push("gi");
                } else if (i % 5 === 0) {
                    arr.push("oh");
                } else {
                    arr.push("" + i);
                }
            }
        }
        return arr;
    }
};
checkYuGiOh(null);
