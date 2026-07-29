const fs = require('fs');

let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');

const theme2_regex = /case 'theme-2':[\s\S]*?return \([\s\S]*?<img[\s\S]*?\/>\s*\);/;
content = content.replace(theme2_regex, `case 'theme-2':
        return (
          <img
            src="/theme2.png"
            alt="Theme 2 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );`);

fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
