const fs = require('fs');
const filePath = './src/components/Products.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const breadcrumb = `
      {/* Breadcrumb & Navigation Bar - Light Theme */}
      <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-500 font-medium">
            <button onClick={() => onNavigate?.('home')} className="hover:text-stone-900 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#b38e5d] font-bold">Products</span>
          </div>
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-1.5 text-[#b38e5d] hover:text-[#967448] font-bold transition-colors bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200/80 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
`;

if (!content.includes('Breadcrumb & Navigation Bar')) {
  content = content.replace(
    /{?\/\* Section Title \*\//,
    breadcrumb + '\n        {/* Section Title */'
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated Products.tsx');
}
