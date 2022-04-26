const fs = require("fs");

class Reader {

    static readJsonFile(path){
        console.log(path)
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }

}

// console.log("Leyendo!")
// Reader.readJsonFile("../../explorers.json")

module.exports = Reader


