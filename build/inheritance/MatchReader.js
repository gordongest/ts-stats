"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CSVFileReader_1 = require("./CSVFileReader");
const utils_1 = require("../utils");
class MatchReader extends CSVFileReader_1.CSVFileReader {
    mapRow(row) {
        return [
            utils_1.stringToDate(row[0]),
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
