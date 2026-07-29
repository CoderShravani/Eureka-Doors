const fs = require('fs');

let content = fs.readFileSync('src/components/FramesCatalog.tsx', 'utf8');

content = content.replace(
  "    'Solid Wood & Red Maranty Door Frame Available',",
  "    'Solid Wood & Red Meranti Door Frames Available',"
).replace(
  "    'Bottom Side FRP Coating',",
  "    'FRP Coated Bottom to Prevent Moisture',"
).replace(
  "    'Easy To Installation',",
  "    'Easy to Install',"
).replace(
  "    'Single or Double Rebate Available',",
  "    'Single and Double Rebate Options',"
).replace(
  "    'Seasoned Wood',",
  "    'Premium Seasoned Wood',"
).replace(
  "    'Borer & Termite Free',",
  "    'Borer & Termite Resistant',"
).replace(
  "    'Section and Size Make To Order'",
  "    'Custom Sections and Sizes Made to Order'"
);

fs.writeFileSync('src/components/FramesCatalog.tsx', content, 'utf8');
