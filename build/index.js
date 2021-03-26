"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from 'fs';
const CSVFileReader_1 = require("./CSVFileReader");
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
// /* standard JS implementation */
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });
//  ^^ NOTE: refactored into CSVFileReader class
// /* draw variable may be marked as unused and tempting for other engineers to delete */
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
// /* using an object instead preserves information context */
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// };
// /* the TypeScript alternative is to use an enum */
// /* this signals to other engineers that it is a collection of related values */
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D'
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* implementation using class inheritance */
/* create instance of MatchReader, pass it filepath */
// const matches = new MatchReader('football.csv');
/* call read method
// matches.read();

/* data is available */
// console.log(matches.data)
//  ^^ NOTE: MatchReader as a child class of CSVFileReader
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* implementation using interface */
/* create instance of csv reader, pass it filepath */
const csvReader = new CSVFileReader_1.CSVFileReader('football.csv');
/* create instance of MatchReader, pass it data reader */
const matchReader = new MatchReader_1.MatchReader(csvReader);
/* call load method */
matchReader.load();
/* data is available */
// console.table(matchReader.data);
// ^^  NOTE: composition pattern, CSVFileReader satisfies interface 'DataReader'
//     MatchReader could also accept APIReader, as long as it complies to interface
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* IMPERATIVE COUNTER */
const imperativeWins = (club) => {
    let wins = 0;
    matchReader.data.forEach((match) => {
        if (match[1] === club && match[5] === MatchResult_1.MatchResult.HomeWin) {
            wins++;
        }
        else if (match[2] === club && match[5] === MatchResult_1.MatchResult.AwayWin) {
            wins++;
        }
    });
    return wins;
};
// console.log('imperative:', imperativeWins('Man United'));
/* FUNCTIONAL COUNTER */
const functionalWins = (club) => matchReader.data.filter((match) => {
    return ((match[1] === club && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === club && match[5] === MatchResult_1.MatchResult.AwayWin));
}).length;
// console.log('functional:', functionalWins('Man United'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const printWins = (club, winCounter) => {
    const wins = winCounter(club);
    console.log(`${club} won ${wins} games`);
};
/* redundant after refactor */
// const clubWins = (club: string): number => functionalWins(club);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let club = 'Man United';
printWins(club, imperativeWins);
club = 'Liverpool';
printWins(club, functionalWins);
club = 'Southampton';
printWins(club, functionalWins);
