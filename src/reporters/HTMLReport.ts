import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
      <h1>Match Analysis</h1>
      <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('football.html', html)
  }
}
