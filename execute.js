const { execSync } = require('child_process');
const path = require('path');

const dayNumber = process.argv[2];

if (!dayNumber || isNaN(dayNumber)) {
    console.error('Error: Please provide a valid day number as the parameter.');
    process.exit(1);
}

const targetFolder = path.join(__dirname, `tasks/day-${dayNumber}/index.js`);

try {
    execSync(`node ${targetFolder}`, { stdio: 'inherit' });
} catch (error) {
    console.error(
        `Failed to execute task for day ${dayNumber}:`,
        error.message,
    );
    process.exit(1);
}
