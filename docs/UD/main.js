title = "Unstable Direction";

description = `
[Tap to Start]
`;

characters = [];

options = {};

/** @type {Vector[]} */
let pins;
let nextPinDist;
let direction = "L";  
let prevTicks = 0;

function update() {
  if (!ticks) {
    pins = [vec(50, 5)];
    nextPinDist = 5;
  }

  //color("black");
  //text(ticks.toString(), 5, 20);
  
  // init direction is left
  if (direction == "L")
  {
    color("blue");
    text(direction, 5, 10);
  }
  else
  {
    color("red");
    text(direction, 5, 10);
  }

  // every 5 to 15 second direction change
  if((ticks - prevTicks) > rnd(300, 900))
  {
    if(direction == "L")
      direction = "R";
    else
      direction = "L";
    
    prevTicks = ticks;
  }

   color("black");
  let scr = difficulty * 0.05;
  remove(pins, (p) => {
    p.y += scr;
    box(p, 3);
    return p.y > 102;
  });
  nextPinDist -= scr;
  while (nextPinDist < 0) {
    pins.push(vec(rnd(10, 90), -2 - nextPinDist));
    nextPinDist += rnd(5, 15);
  }
}