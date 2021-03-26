import { stringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;

  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  data: MatchData[] = [];

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }
}
