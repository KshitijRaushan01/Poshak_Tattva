import fs from 'fs';
import path from 'path';

const directories = [
  { dir: 'pages/yoga', fallback: '/img/home/yoga.jpg' },
  { dir: 'pages/diet', fallback: '/img/home/diet.jpg' },
  { dir: 'pages/sound-healing', fallback: '/img/home/sound-healing.jpg' }
];

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const unsplashRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[a-zA-Z0-9=&]*)?/g;

directories.forEach(({ dir, fallback }) => {
  const files = walkSync(dir);
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (unsplashRegex.test(content)) {
      const updatedContent = content.replace(unsplashRegex, fallback);
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log('Updated ' + file + ' - Replaced Unsplash URLs with ' + fallback);
    }
  });
});
