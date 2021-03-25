import fs from 'fs';
// import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

/* create a tuple to allow for typing */
type MatchData = [Date, string, string, number, number, MatchResult, string];

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

  // /* extract the previous anonymous function into a method */
  // mapRow(row: string[]): MatchData {
  //   return [
  //     dateStringToDate(row[0]),
  //     row[1],
  //     row[2],
  //     Number(row[3]),
  //     Number(row[4]),
  //     row[5] as MatchResult,
  //     row[6],
  //   ];
  // }
}
