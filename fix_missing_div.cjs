const fs = require('fs');
let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');
content = content.replace('      <AnimatePresence>', '      </div>\n\n      <AnimatePresence>');
fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
