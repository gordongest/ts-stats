// import fs from 'fs';
// import { CSVFileReader } from './CSVFileReader';
// import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HTMLReport } from './reporters/HTMLReport';

// /* STANDARD JS IMPLEMENTATION */

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

/* CLASS INHERITANCE IMPLEMENTATION */

/* create instance of MatchReader, pass it filepath */
// const matches = new MatchReader('football.csv');

/* call read method
// matches.read();

/* data is available */
// console.log(matches.data)

//  ^^ NOTE: MatchReader as a child class of CSVFileReader

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* INTERFACE IMPLEMENTATION */

/* create instance of csv reader, pass it filepath */
// const csvReader = new CSVFileReader('football.csv');

/* create instance of MatchReader, pass it data reader */
// const matchReader = new MatchReader(csvReader);
const matchReader = MatchReader.readFromCsv('football.csv')

/* call load method */
matchReader.load();

/* data is available */
// console.table(matchReader.data);

// ^^  NOTE: CSVFileReader satisfies interface 'DataReader'
//     MatchReader could also accept APIReader/HTMLReader, etc, as long as it complies to interface

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// /* IMPERATIVE COUNTER */

// const imperativeWins = (club: string): number => {
//   let wins = 0;

//   matchReader.data.forEach((match): void => {
//     if (match[1] === club && match[5] === MatchResult.HomeWin) {
//       wins++;
//     } else if (match[2] === club && match[5] === MatchResult.AwayWin) {
//       wins++;
//     }
//   });

//   return wins;
// };

// /* FUNCTIONAL COUNTER */

// const functionalWins = (club: string): number =>
//   matchReader.data.filter((match): boolean => {
//     return (
//       (match[1] === club && match[5] === MatchResult.HomeWin) ||
//       (match[2] === club && match[5] === MatchResult.AwayWin)
//     );
//   }).length;

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// /* redundant after refactor */
// // const clubWins = (club: string): number => functionalWins(club);

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const printWins = (
//   club: string,
//   winCounter: (club: string) => number
// ): void => {
//   const wins = winCounter(club);
//   console.log(`${club} won ${wins} games`);
// };

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let club: string = 'Man United';

// console.time('Imperative time')
// printWins(club, imperativeWins);
// console.timeEnd('Imperative time')
// /* ~2.5ms */

// console.time('Functional time')
// // club = 'Liverpool';
// printWins(club, functionalWins);
// console.timeEnd('Functional time')
// /* ~0.1ms */

/* COMPOSITIONAL IMPLEMENTATION */

const matchData = matchReader.data;

const analysis = new WinsAnalysis('Chelsea');
const report = new ConsoleReport();
const chelseaWins = new Summary(analysis, report);

chelseaWins.buildAndReport(matchData);

/* refactored to be more concise */

const consoleSummary = (club: string): Summary => {
  return new Summary(new WinsAnalysis(club), new ConsoleReport());
};

consoleSummary('Tottenham').buildAndReport(matchData);

const htmlSummary = (club: string): Summary => {
  return new Summary(new WinsAnalysis(club), new HTMLReport());
};

htmlSummary('West Ham').buildAndReport(matchData);

/* USING STATIC METHODS */

Summary.Console('Southampton', matchData)
Summary.HTML('Arsenal', matchData)
