const fs = require('fs');

let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');
content = content.replace(
  "      default:",
  `      case 'theme-4':
        return (
          <img
            src="/theme4.png"
            alt="Theme 4 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );
      default:`
);
fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
