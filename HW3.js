let sales = [
    [345.54, 389.21, 745.90, 451.89, 395.67, 451.45, 598.42, 575.64, 523.78, 678.55, 874.56, 945.34],
    [423.54, 423.87, 432.87, 534.77, 385.29, 642.89, 452.84, 523.88, 554.78, 767.90, 523.44, 899.34],
    [623.87, 518.66, 372.67, 745.56, 634.56, 429.88, 528.67, 418.56, 276.52, 514.95, 639.52, 786.58],
];

// let indx = 1;
// console.log(fCalcRowTotal(sales, indx));

// let jndx = 5
// console.log(fCalcColTotal(sales, jndx))

let year = 2016;
let month = 1;

console.log("------Totals per year----------------");
for (let i = 0; i < 3; i++) {
    console.log("Total for year " + year + "      = $" + fCalcRowTotal(sales, i));
    year++;
}

console.log("------Totals per month---------------");
for (let i = 0; i < 12; i++) {
    if (month >= 10) {
        console.log("Total for month " + month + "       = $" + fCalcColTotal(sales, i)); 
    }
    else {
        console.log("Total for month " + month + "        = $" + fCalcColTotal(sales, i));
    }
    month++;
}

function fCalcRowTotal(arr, i) {
    if (i < 0 || i > 2) {
        return 'Invalid Row Index';
    }
    let rowTotal = 0;
    for (let j = 0; j < 12; j++) {
        rowTotal = rowTotal + arr[i][j];
    }
    rowTotal = rowTotal.toFixed(2);
    return rowTotal;
}

function fCalcColTotal(arr, i) {
    if (i < 0 || i > 11) {
        return 'Invalid Month';
    }
    let colTotal = 0;
    for (let j = 0; j < 3; j++) {
        colTotal = colTotal + arr[j][i];
    }
    colTotal = colTotal.toFixed(2);
    return colTotal;
}