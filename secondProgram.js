let colors = ['red',
    'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
    'green', 'green', 'red', 'green', 'blue'
];

let distribution = {};
let max = 0;
let result = [];

colors.forEach(function(a) {
    distribution[a] = (distribution[a] || 0) + 1;
    if (distribution[a] > max) {
        max = distribution[a];
        result = [a];
        return;
    }
    if (distribution[a] === max) {
        result.push(a);
    }
});
console.log(`${result} color with max ${max} count`);
console.log(distribution);