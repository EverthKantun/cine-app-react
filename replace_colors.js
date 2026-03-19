import fs from 'fs';
import path from 'path';

const dir = './src';
const replacements = {
  '#0B2B4E': 'var(--color-primary-dark)',
  '#144272': 'var(--color-primary)',
  '#FFC107': 'var(--color-accent)',
  '#FFB300': 'var(--color-accent-light)',
  '#FFFFFF': 'var(--color-surface)',
  '#FAFAFA': 'var(--color-background)',
  '#212121': 'var(--color-text-primary)',
  '#757575': 'var(--color-text-secondary)',
  '#E0E0E0': 'var(--color-border)',
  '#388E3C': 'var(--color-success)',
  '#D32F2F': 'var(--color-error)'
};

function replaceInDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.css') && !fullPath.includes('variables.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [hex, variable] of Object.entries(replacements)) {
        const regex = new RegExp(hex, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, variable);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(dir);
console.log("Replaced colors successfully.");
