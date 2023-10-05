const fs = require("fs");
const path = require("path");

// Remove Log files
const logsDirectory = path.join(__dirname, "Logs");

if (fs.existsSync(logsDirectory)) {
  const files = fs.readdirSync(logsDirectory);

  files.forEach((file) => {
    fs.unlinkSync(path.join(logsDirectory, file));
    console.log(`delete files...${file}`);
  });

  fs.rmdirSync(logsDirectory);
}
