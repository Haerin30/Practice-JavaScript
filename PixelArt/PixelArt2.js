const pixelArt = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,3,1,1,3],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,4,4,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,4,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,4,4,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,0,0,0,0],
  [4,4,1,1,1,1,0,2,2,4,4,4,2,2,4,0,0,0,0,0],
  [4,4,4,1,1,0,0,2,2,0,0,0,2,2,0,0,0,0,0,0],
  [4,4,4,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0],
];

// FIXED palette (you had duplicate "2")
const PALETTE = { 
  1: "#C35817",  // brown
  2: "#81350F",  // dark brown
  3: "#616161",  // white
  4: "#FFFFFF"   // gray
};

const pixelSize = 20;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// set canvas size
canvas.width = pixelArt[0].length * pixelSize;
canvas.height = pixelArt.length * pixelSize;

// draw pixel art
for (let row = 0; row < pixelArt.length; row++) {
  for (let col = 0; col < pixelArt[row].length; col++) {
    const value = pixelArt[row][col];

    if (value !== 0) {
      ctx.fillStyle = PALETTE[value];
      ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
    }
  }
}