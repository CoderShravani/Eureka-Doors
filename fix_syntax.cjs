const fs = require('fs');

let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');

// Replace the broken part
content = content.replace(/  const renderThemeDoorGraphic = \(doorId: string\) => \{\n    alt=\{`\$\{doorId\} Custom Design`\}\n          className="w-full h-full object-cover rounded shadow-xs"\n        \/>\n      \);\n    \}/, 
`  const renderThemeDoorGraphic = (doorId: string) => {`);
fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
