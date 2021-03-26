"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reporters/ConsoleReport");
const HTMLReport_1 = require("./reporters/HTMLReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static Console(club, matches) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(club), new ConsoleReport_1.ConsoleReport()).buildAndReport(matches);
    }
    static HTML(club, matches) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(club), new HTMLReport_1.HTMLReport()).buildAndReport(matches);
    }
    buildAndReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
