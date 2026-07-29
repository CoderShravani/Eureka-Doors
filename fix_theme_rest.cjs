const fs = require('fs');
let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');

const theme3_regex = /case 'theme-3':[\s\S]*?return \([\s\S]*?<svg[\s\S]*?<\/svg>\s*\);/;
content = content.replace(theme3_regex, `case 'theme-3':
        return (
          <img
            src="/theme3.png"
            alt="Theme 3 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );`);

const theme4_regex = /case 'theme-4':[\s\S]*?return \([\s\S]*?<svg[\s\S]*?<\/svg>\s*\);/;
content = content.replace(theme4_regex, `case 'theme-4':
        return (
          <img
            src="/theme4.png"
            alt="Theme 4 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );`);
fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
