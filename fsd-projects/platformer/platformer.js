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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 620, 200, 120, "blue"); //First box platform
    createPlatform(0, 500, 100, 10, "blue"); //first line platform
    createPlatform(700, 500, 80, 150, "blue"); //Second box platform bottom
    createPlatform(700, 200, 80, 200, "blue"); //Second box platform top
    createPlatform(640, 560, 80, 10, "blue"); //Second line platform
    createPlatform(0, 370, 70, 10, "blue"); //first line platform PT2
    createPlatform(350, 300, 70, 10, "blue"); //top first line platform
    createPlatform(680, 200, 70, 10, "blue"); //top second box nub
     createPlatform(700, 550, 700, 100, "blue"); //hallway top
    // TODO 3 - Create Collectables
    createCollectable("steve", 0, 500, .05, 1);
    createCollectable("diamond", 1300, 700, .05, 1);
    createCollectable("diamond", 700, 100, .05, 1);
 

    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 100000, 5000, 5000);
    createCannon("right", 800, 14000, 5000, 240)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
