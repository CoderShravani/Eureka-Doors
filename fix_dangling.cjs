const fs = require('fs');
let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');

const danglingStart = `        reader.readAsDataURL(file);
  };`;

// Find where reader.readAs... starts and remove it and handleResetImage.
content = content.replace(/        reader\.readAsDataURL\(file\);\s*\};\s*const handleResetImage = \([\s\S]*?\}\s*\};\s*/, '');

fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
