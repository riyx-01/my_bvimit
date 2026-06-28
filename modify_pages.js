const fs = require('fs');
const path = require('path');

const filesToDelete = [
  path.join(__dirname, 'navbar_diff.txt'),
  path.join(__dirname, 'revert_status.txt'),
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log('Deleted: ' + file);
  }
});

// Self destruct
setTimeout(() => {
  if (fs.existsSync(__filename)) {
    fs.unlinkSync(__filename);
    console.log('Self-destructed successfully!');
  }
}, 1000);
