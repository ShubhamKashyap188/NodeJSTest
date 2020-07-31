let amtArray = [2000, 500, 200, 100];
let resultArray = [];

let total = 2600;

for (let i = 0; i < amtArray.length; i++) {
    resultArray.push(Math.floor(total / amtArray[i]));
    total = total % amtArray[i];
}
var twothousands_notes = resultArray[0];
var fivehundred_notes = resultArray[1];
var twohundred_notes = resultArray[2];
var hundred_notes = resultArray[3];

console.log(`
        calculated amout:- 
        
        ${ twothousands_notes ? `2000: ${twothousands_notes}`: ''}
        ${ fivehundred_notes ? `500: ${fivehundred_notes}`: ''}
        ${ twohundred_notes ? `200: ${twohundred_notes}`: ''}
        ${ hundred_notes ? `100: ${hundred_notes}`: ''}
        
        `);