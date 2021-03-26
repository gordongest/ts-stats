import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HTMLReport } from './reporters/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static Console(club: string, matches: MatchData[]): void {
    return new Summary(
      new WinsAnalysis(club),
      new ConsoleReport()
    ).buildAndReport(matches)
  }

  static HTML(club: string, matches: MatchData[]): void {
    return new Summary(
      new WinsAnalysis(club),
      new HTMLReport()
    ).buildAndReport(matches)
  }

  buildAndReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
