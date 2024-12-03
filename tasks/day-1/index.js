const fs = require('node:fs');

fs.readFile('./tasks/day-1/data/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const rows = data.trim().split('\n');
    const leftColumnNumbers = [];
    const rightColumnNumbers = [];

    rows.forEach((line) => {
        const [left, right] = line.split('   ');
        leftColumnNumbers.push(left);
        rightColumnNumbers.push(right);
    });

    leftColumnNumbers.sort();
    rightColumnNumbers.sort();

    // Part 1
    const resultPart1 = leftColumnNumbers.reduce(
        (sum, num, index) => sum + Math.abs(num - rightColumnNumbers[index]),
        0,
    );

    console.log('Part 1 result:', resultPart1);

    // Part 2
    const rightColumnCounts = rightColumnNumbers.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const resultPart2 = leftColumnNumbers.reduce((acc, num) => {
        const count = rightColumnCounts[num] || 0;
        return acc + num * count;
    }, 0);

    console.log('Part 2 result:', resultPart2);
});
