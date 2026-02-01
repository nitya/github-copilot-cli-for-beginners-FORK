#!/usr/bin/env node
/**
 * Generate .tape files from demos.json configuration
 *
 * Usage: npm run create:tapes
 */

const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

const rootDir = join(__dirname, '..');
const config = require('./demos.json');

function generateTapeContent(demo, settings) {
  const s = { ...settings, ...demo }; // Allow per-demo overrides

  return `# ${demo.chapter}: ${demo.description}
# Auto-generated from demos.json - Real copilot execution

Output ${demo.name}.gif

Set FontSize ${s.fontSize}
Set Width ${s.width}
Set Height ${s.height}
Set Theme "${s.theme}"
Set Padding 20
Set BorderRadius 8
Set Margin 10
Set MarginFill "#282a36"

# Human typing speed
Set TypingSpeed ${s.typingSpeed}

# Launch copilot
Type "copilot"
Enter

# Wait for copilot to start
Sleep ${s.startupWait}s

# Execute the prompt
Type "${demo.prompt}"
Enter

# Wait for response
Sleep ${s.responseWait}s

# Exit cleanly
Ctrl+C
Sleep ${s.exitWait}s
`;
}

// Main
console.log('📝 Creating tape files from demos.json...\n');

let created = 0;

for (const demo of config.demos) {
  const imagesDir = join(rootDir, demo.chapter, 'images');
  const tapePath = join(imagesDir, `${demo.name.replace('-demo', '')}.tape`);

  // Ensure images directory exists
  if (!existsSync(imagesDir)) {
    mkdirSync(imagesDir, { recursive: true });
    console.log(`  Created: ${demo.chapter}/images/`);
  }

  // Generate tape content
  const content = generateTapeContent(demo, config.settings);

  // Write tape file
  writeFileSync(tapePath, content);
  console.log(`  ✓ ${demo.chapter}/images/${demo.name.replace('-demo', '')}.tape`);
  created++;
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`✓ Created ${created} tape file(s)`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`\nNext: npm run generate:vhs`);
