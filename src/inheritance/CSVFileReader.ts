import fs from 'fs';
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

export abstract class CSVFileReader<T> {
  // T = TypeOfData
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  data: T[] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
