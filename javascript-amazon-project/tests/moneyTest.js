import {formatCurrency} from "../scripts/utils/money.js";

console.log('Test suite: format currency');

console.log('coneverts cents into dollars');
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}
else {
    console.log('Failed');
}

console.log('works with zero cents');
if (formatCurrency(0) === '0.00') {
    console.log('passed');
}
else {
    console.log('Failed');
}

console.log('rounds upto the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
}
else {
    console.log('Failed');
}

console.log('rounds upto the nearest cent');
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
}
else {
    console.log('Failed');
}