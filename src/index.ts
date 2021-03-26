// import fs from 'fs';
import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

// /* standard JS implementation */
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });

/* implementation using class */
// const matches = new MatchReader('football.csv');
// matches.read();

/* implementation using interface */
/* create instance of data reader */
const reader = new CSVFileReader('football.csv');
/* create instance of MatchReader, pass it data reader */
const matchReader = new MatchReader(reader);
matchReader.load();
console.table(matchReader.data);

// console.table(matches.data);

/* draw variable may be marked as unused and tempting for other engineers to delete */
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

/* using an object instead preserves information context */
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

let manUtdWins = 0;

matchReader.data.forEach((match): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
});

console.log(`The Red Devils won ${manUtdWins} games`);
