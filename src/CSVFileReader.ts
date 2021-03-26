import fs from 'fs';
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

// type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  constructor(public filename: string) {}

  data: string[][] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
