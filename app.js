const fs = require("fs");
const path = require("path");

const readSVGFiles = async (folderPath) => {
  const svgJSON = [];

  // Read directory and filter SVG files
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => path.extname(file) === ".svg");

  for (const file of files) {
    // Read the file content
    const content = fs.readFileSync(path.join(folderPath, file), "utf-8");

    // Store content in JSON object
    svgJSON.push({
      image: content,
      path: file,
      prefix: "linea_basic",
      name: path.parse(file).name,
    });
  }

  // Convert the object to a JSON string
  const jsonStr = JSON.stringify(svgJSON, null, 2);

  // Write JSON string to a file
  fs.writeFileSync("svgFiles.json", jsonStr);
};

// Example usage
readSVGFiles("./IconsFolder"); // Replace './svgs' with your actual folder path containing SVGs
