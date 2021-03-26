"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(club) {
        this.club = club;
    }
    run(matches) {
        const wins = matches.filter((match) => {
            return ((match[1] === this.club && match[5] === MatchResult_1.MatchResult.HomeWin) ||
                (match[2] === this.club && match[5] === MatchResult_1.MatchResult.AwayWin));
        }).length;
        return `${this.club} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
