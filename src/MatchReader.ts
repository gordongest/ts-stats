import { CSVFileReader } from './CSVFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from 

export class MatchReader extends CSVFileReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
