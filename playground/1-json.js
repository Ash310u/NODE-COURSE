const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString()
const parseData = JSON.parse(dataJSON);

parseData.Name = 'Ash'
parseData.Planet = 'Keplar 22b'
parseData.Age = 19

const newJsonData = JSON.stringify(parseData)
const newdata = fs.writeFileSync("1-json.json", newJsonData )
