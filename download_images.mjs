import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Yoga
  { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop', path: 'public/img/services/yoga/yoga-group.jpg' },
  { url: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1470&auto=format&fit=crop', path: 'public/img/services/yoga/yoga-private.jpg' },
  { url: 'https://images.unsplash.com/photo-1528315735161-0ae190eb8d7f?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/yoga/yoga-meditation.jpg' },
  { url: 'https://images.unsplash.com/photo-1511295742362-92c96b12aee3?q=80&w=1471&auto=format&fit=crop', path: 'public/img/services/yoga/yoga-nidra.jpg' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/yoga/yoga-pranayama.jpg' },
  // Sound
  { url: 'https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/sound/sound-private.jpg' },
  { url: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/sound/sound-workshop.jpg' },
  { url: 'https://images.unsplash.com/photo-1577900236528-984dd80d285b?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/sound/sound-gong.jpg' },
  { url: 'https://images.unsplash.com/photo-1518002621404-58a36d93b132?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/sound/sound-chakra.jpg' },
  // Diet
  { url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/diet/diet-digestive.jpg' },
  { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/diet/diet-hormonal.jpg' },
  { url: 'https://images.unsplash.com/photo-1498837167922-41c53b44c3ec?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/diet/diet-lifestyle.jpg' },
  { url: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/diet/diet-weight.jpg' },
  { url: 'https://images.unsplash.com/photo-1473093295043-cbdd812d0e60?q=80&w=1400&auto=format&fit=crop', path: 'public/img/services/diet/diet-autoimmune.jpg' },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded', filepath);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Unsplash redirects
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Downloaded', filepath);
            resolve();
          });
        }).on('error', reject);
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error('Server responded with ' + response.statusCode));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function main() {
  for (const img of images) {
    try {
      await downloadImage(img.url, img.path);
    } catch (e) {
      console.error('Failed to download', img.url, e.message);
    }
  }
}

main();
