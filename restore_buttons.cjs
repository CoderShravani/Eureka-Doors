const fs = require('fs');

const buttonStr = `          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-[#b38e5d] hover:text-[#967448] font-bold transition-colors bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200/80 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>`;

function restore(file, pageName) {
  let content = fs.readFileSync(file, 'utf8');
  // find the block closing tag for the breadcrumbs flex container
  const regex = new RegExp(`(<span className="text\\[#b38e5d\\] font-bold">${pageName}<\\/span>\\s*<\\/div>\\s*)<\\/div>`);
  
  content = content.replace(regex, `$1${buttonStr}\n        </div>`);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Restored in ' + file);
}

restore('src/components/AboutUs.tsx', 'About Us');
restore('src/components/OurClients.tsx', 'Our Clients');
restore('src/components/DealerNetwork.tsx', 'Dealer Network');
