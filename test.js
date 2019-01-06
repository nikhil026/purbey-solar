const fs = require('fs');
fs.readdirSync('./public/views').forEach(file => {
  console.log(file);
})