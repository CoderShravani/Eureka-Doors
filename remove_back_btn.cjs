const fs = require('fs');
const glob = require('glob');

// We use glob to find all Catalog files
const files = glob.sync('src/components/*Catalog.tsx');
files.push('src/components/AboutUs.tsx');
files.push('src/components/OurClients.tsx');
files.push('src/components/DealerNetwork.tsx');

const buttonRegex = /\s*<button\s*onClick=\{onNavigateHome\}\s*className="flex items-center gap-1\.5[^>]+>\s*<RotateCcw className="[^"]+" \/>\s*<span>Back to Home<\/span>\s*<\/button>/g;
// some might have slightly different classes, so we can make regex more flexible
const flexibleRegex = /\s*<button[^>]+onClick=\{onNavigateHome\}[^>]*>\s*<RotateCcw[^>]*\/>\s*<span>Back to Home<\/span>\s*<\/button>/g;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(flexibleRegex, '');
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
