#!/usr/bin/env node
/**
 * Generate course demo GIFs from .tape files
 *
 * This script finds all .tape files in [chapter]/images/ folders and runs VHS
 * to generate GIFs. VHS is run from the project root so that @file references
 * in prompts resolve correctly.
 *
 * Usage: npm run generate:vhs
 *
 * Requirements:
 *   - VHS: brew install vhs
 *   - gifsicle: brew install gifsicle
 */

const { execSync } = require('child_process');
const { readdirSync, statSync, existsSync, readFileSync, renameSync } = require('fs');
const { join, basename, relative, dirname } = require('path');

const rootDir = join(__dirname, '..');

// Find all .tape files in [chapter]/images/ folders
function findTapeFiles(dir) {
  const tapeFiles = [];

  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && !entry.startsWith('.') && entry !== 'node_modules' && entry !== 'scripts') {
      // Check for images subfolder
      const imagesDir = join(fullPath, 'images');
      if (existsSync(imagesDir)) {
        try {
          const imagesEntries = readdirSync(imagesDir);
          for (const file of imagesEntries) {
            if (file.endsWith('.tape')) {
              tapeFiles.push(join(imagesDir, file));
            }
          }
        } catch (e) {
          // Can't read images folder, skip
        }
      }
    }
  }

  return tapeFiles;
}

// Extract output filename from tape file
function getOutputFilename(tapeFilePath) {
  const content = readFileSync(tapeFilePath, 'utf8');
  const match = content.match(/^Output\s+(\S+)/m);
  return match ? match[1] : null;
}

// Main
console.log('🎬 Generating course demos...\n');
console.log('Working directory:', rootDir);
console.log('');

const tapeFiles = findTapeFiles(rootDir);

if (tapeFiles.length === 0) {
  console.log('No .tape files found in [chapter]/images/ folders');
  process.exit(0);
}

console.log(`Found ${tapeFiles.length} tape file(s):\n`);
tapeFiles.forEach(f => console.log('  - ' + relative(rootDir, f)));
console.log('');

let success = 0;
let failed = 0;

for (const tapeFile of tapeFiles) {
  const relativePath = relative(rootDir, tapeFile);
  const imagesDir = dirname(tapeFile);
  const outputFilename = getOutputFilename(tapeFile);

  console.log(`Processing: ${relativePath}`);

  try {
    // Run VHS from project root so @file references resolve correctly
    execSync(`vhs ${relativePath}`, {
      cwd: rootDir,
      stdio: 'inherit',
      timeout: 180000 // 3 minute timeout per demo (real copilot takes longer)
    });

    // Move generated GIF to the images folder if it was created in root
    if (outputFilename) {
      const generatedPath = join(rootDir, outputFilename);
      const targetPath = join(imagesDir, outputFilename);
      if (existsSync(generatedPath) && generatedPath !== targetPath) {
        renameSync(generatedPath, targetPath);
        console.log(`   → Moved to: ${relative(rootDir, targetPath)}`);
      }
    }

    // Apply no-loop to all GIFs in the images directory
    const gifFiles = readdirSync(imagesDir).filter(f => f.endsWith('.gif'));
    for (const gifFile of gifFiles) {
      const gifPath = join(imagesDir, gifFile);
      try {
        execSync(`gifsicle --no-loopcount "${gifPath}" -o "${gifPath}"`, { stdio: 'pipe' });
        console.log(`   ✓ Set no-loop: ${gifFile}`);
      } catch (e) {
        console.log(`   ⚠ gifsicle failed for ${gifFile}`);
      }
    }

    success++;
    console.log('');
  } catch (e) {
    console.log(`   ✗ Failed: ${e.message}\n`);
    failed++;
  }
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✓ Success: ${success}`);
if (failed > 0) {
  console.log(`✗ Failed:  ${failed}`);
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
