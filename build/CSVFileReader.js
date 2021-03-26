"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';
// type MatchData = [Date, string, string, number, number, MatchResult, string];
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CSVFileReader = CSVFileReader;
