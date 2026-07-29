const fs = require('fs');

const filesToFix = [
  'PvcFlushDoorsCatalog.tsx',
  'PvcPanelDoorsCatalog.tsx',
  'WoodenFlushDoorsCatalog.tsx',
  'WoodenMoldedDoorsCatalog.tsx'
];

for (const file of filesToFix) {
  const filePath = `./src/components/${file}`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the exact block
  const breadcrumbBlockRegex = /\s*{\/\* Breadcrumb & Navigation Bar - Light Theme \*\/}\s*<div className="bg-white border-b border-stone-200\/80 py-3\.5 shadow-sm mb-8">\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">\s*<div className="flex items-center gap-2 text-stone-500 font-medium">\s*<button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">\s*Home\s*<\/button>\s*<ChevronRight className="w-3\.5 h-3\.5 text-stone-400" \/>\s*<span className="hover:text-stone-900 transition-colors">Products<\/span>\s*<ChevronRight className="w-3\.5 h-3\.5 text-stone-400" \/>\s*<span className="text-\[#b38e5d\] font-bold">[^<]+<\/span>\s*<\/div>\s*<button\s*onClick={onNavigateHome}\s*className="flex items-center gap-1\.5 text-\[#b38e5d\] hover:text-\[#967448\] font-bold transition-colors bg-stone-50 px-3 py-1\.5 rounded-lg border border-stone-200\/80 cursor-pointer"\s*>\s*<RotateCcw className="w-3\.5 h-3\.5" \/>\s*<span>Back to Home<\/span>\s*<\/button>\s*<\/div>\s*<\/div>/;

  // Replace only the FIRST occurrence
  content = content.replace(breadcrumbBlockRegex, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
}
