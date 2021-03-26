import { CSVFileReader } from './CSVFileReader';
import { stringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

/* create a tuple to allow for typing */
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
