const fs = require('fs');
let file = 'PlywoodCatalog.tsx';
let filePath = `./src/components/${file}`;
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('ChevronRight')) {
  content = content.replace(/import {([^}]+)} from 'lucide-react';/, (match, p1) => {
    return `import {${p1}, ChevronRight, RotateCcw } from 'lucide-react';`;
  });
}
let sectionRegex = /<(section|div) id="([^"]+)" className="(pt-32|pt-20|py-10|py-12)[^"]*"/;
let match = content.match(sectionRegex);
if (match) {
  const id = match[2];
  content = content.replace(sectionRegex, `<div id="${id}" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen"`);
  
  const breadcrumbStartRegex = /{\/\* Top Breadcrumbs \*\//;
  const titleMatch = content.match(/<div className="mb-8 flex flex-col/);
  const breadcrumbMatch = content.match(breadcrumbStartRegex);
  
  if (breadcrumbMatch && titleMatch) {
    let pageTitle = 'Plywood';
    
    const newBreadcrumb = `
    {/* Breadcrumb & Navigation Bar - Light Theme */}
    <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-stone-500 font-medium">
          <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="hover:text-stone-900 transition-colors">Products</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#b38e5d] font-bold">\${pageTitle}</span>
        </div>
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-1.5 text-[#b38e5d] hover:text-[#967448] font-bold transition-colors bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200/80 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
      \${titleMatch[0]}`;

    const textToReplace = content.substring(content.indexOf('<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'), titleMatch.index + titleMatch[0].length);
    content = content.replace(textToReplace, newBreadcrumb);
    content = content.replace(/<\/section>\s*$/, '</div>\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated \${file}`);
  }
}
