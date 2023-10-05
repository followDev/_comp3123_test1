const fs = require("fs");
const path = require("path");

// Create Log files
const logsDirectory = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory); // Change the current process to the new Logs directory

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(fileName);
}
