import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public club: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.filter((match): boolean => {
      return (
        (match[1] === this.club && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.club && match[5] === MatchResult.AwayWin)
      );
    }).length;
    
    return `${this.club} won ${wins} games`
  }

}
