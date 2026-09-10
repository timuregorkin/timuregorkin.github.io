$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(300, 620, 100, 120, "purple"); //First box platform
    createPlatform(0, 500, 90, 150, "purple"); //first line platform
    createPlatform(700, 500, 80, 150, "purple"); //Second box platform bottom
    createPlatform(700, 200, 80, 200, "purple"); //Second box platform top
    createPlatform(640, 560, 80, 10, "purple"); //Second line platform
    createPlatform(0, 370, 70, 10, "purple"); //first line platform PT2
    createPlatform(350, 300, 70, 10, "purple"); //top first line platform
    createPlatform(680, 200, 70, 10, "purple"); //top second box nub
    createPlatform(700, 550, 700, 100, "purple"); //hallway top
    createPlatform(920, 450, 50, 10, "purple"); //hallway top PT3
    createPlatform(950, 350, 700, 200, "purple"); //hallway top PT2
    createPlatform(780, 0, 100, 400, "purple"); //Second box platform top PT2
    createPlatform(1000, 250, 100, 100, "purple"); //Box in room
    createPlatform(1100, 150, 230, 100, "purple"); //Box in room PT2
    createPlatform(1100, 240, 240, 10, "purple"); //Box in room PT2
    createPlatform(860, 120, 50, 230, "purple"); //second top box PT3
    // TODO 3 - Create Collectables
    createCollectable("bigIceTower", 0, 690, .05, 1);
    createCollectable("bigTower", 0, 450, .05, 1);
    createCollectable("bigNeonTower", 1280, 690, .05, 1);
    createCollectable("bigFlappyTower", 730, 100, .05, 1);
    createCollectable("bigTowerTwo", 860, 0, .05, 1);
    createCollectable("pineapple", 1100, 250, .05, 1);
 

    
    // TODO 4 - Create Cannons
    createCannon("bottom", 650, 20000, 25, 8000);
    createCannon("right", 750, 14000, 5000, 135);
    createCannon("right", 150, 10000, 3000, 50);
    createCannon("right", 350, 100000, 100000, 50);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
