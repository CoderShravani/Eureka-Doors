const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const stateRegex = /const \[currentSlide, setCurrentSlide\] = useState\(0\);/;
const newState = `const [currentSlide, setCurrentSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);`;
content = content.replace(stateRegex, newState);

const effectRegex = /useEffect\(\(\) => \{\s*const timer = setInterval\(\(\) => \{\s*setCurrentSlide\(\(prev\) => \(prev \+ 1\) % heroImages\.length\);\s*\}, 5000\);\s*return \(\) => clearInterval\(timer\);\s*\}, \[\]\);/;
const newEffect = `useEffect(() => {
    if (hasInteracted || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasInteracted, isHovered]);`;
content = content.replace(effectRegex, newEffect);

const nextRegex = /const nextSlide = \(\) => setCurrentSlide\(\(prev\) => \(prev \+ 1\) % heroImages\.length\);/;
const newNext = `const nextSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };`;
content = content.replace(nextRegex, newNext);

const prevRegex = /const prevSlide = \(\) => setCurrentSlide\(\(prev\) => \(prev === 0 \? heroImages\.length - 1 : prev - 1\)\);/;
const newPrev = `const prevSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };`;
content = content.replace(prevRegex, newPrev);

const divHoverRegex = /<motion\.div\s*initial=\{\{ opacity: 0, scale: 0\.95 \}\}/;
const newDivHover = `<motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.95 }}`;
content = content.replace(divHoverRegex, newDivHover);

fs.writeFileSync('src/components/Hero.tsx', content);
