// One-shot image optimizer. Reads the large source images that pages actually
// reference and writes web-sized WebP + fallback (JPEG/PNG) variants into
// assets/opt/. Run with: npm run optimize:images
//
// Originals are left untouched so they remain as source material; the HTML is
// repointed at the optimized variants. Requires the `sharp` devDependency.

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT_DIR = 'assets/opt';

// src = path to the heavy original, relative to repo root.
// name = output basename. width = max width (never upscaled).
const jobs = [
    { src: 'DSC_5345.jpg', name: 'team-community', width: 1600, formats: ['webp', 'jpg'] },
    { src: 'assets/DSC_2823.jpg', name: 'team-fallback', width: 1600, formats: ['webp', 'jpg'] },
    { src: 'assets/elfatih.jpg', name: 'elfatih', width: 900, formats: ['webp', 'jpg'] },
    { src: 'assets/ecoawareness.me group photo with mr Q.jpeg', name: 'group-photo', width: 1600, formats: ['webp', 'jpg'] },
    { src: 'assets/IMG.PNG', name: 'logo', width: 768, formats: ['webp', 'png'] },
];

await mkdir(OUT_DIR, { recursive: true });

for (const job of jobs) {
    for (const fmt of job.formats) {
        const outPath = path.join(OUT_DIR, `${job.name}.${fmt}`);
        let pipeline = sharp(job.src)
            .rotate() // honour EXIF orientation before stripping metadata
            .resize({ width: job.width, withoutEnlargement: true });
        if (fmt === 'webp') pipeline = pipeline.webp({ quality: 72 });
        else if (fmt === 'jpg') pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true });
        else if (fmt === 'png') pipeline = pipeline.png({ compressionLevel: 9, palette: true });
        const info = await pipeline.toFile(outPath);
        console.log(`${outPath.padEnd(32)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
    }
}
console.log('done');
