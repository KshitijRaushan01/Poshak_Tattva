import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(walkDir(filePath));
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

const targetDirs = [
  path.join(process.cwd(), 'pages'),
  path.join(process.cwd(), 'src/components')
];

let updatedCount = 0;

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = walkDir(dir);
    files.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      if (content.includes('text-muted')) {
        // Regex to replace 'text-muted ' or ' text-muted' or just 'text-muted'
        const newContent = content.replace(/\btext-muted\b/g, '').replace(/  +/g, ' ').replace(/className=" "/g, 'className=""').replace(/className=' '/g, "className=''");
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
        updatedCount++;
      }
    });
  }
});

console.log(`Finished purging text-muted from ${updatedCount} files.`);
