// Rover Mars Exercise from Ironhack Web Dev Bootcamp


// Define myRover object

var myRover = {
  name: "Roverto",
  position: [0,0], 
  direction: 'N'
};


// Define the functions for myRover object: forward, backward, turn-left and turn-right



// ------------------------------------------------------------------------------------

function goForward(rover) {

    switch(rover.direction) {

// Define changing positions for each direction of the rover.  

      case 'N':
        if (rover.position[0] === 9) {
            rover.position[0] = 0
        }
        else {
              rover.position[0]++
        }
      break;
      
      case 'E':
        if (rover.position[1] === 9) {
            rover.position[1] = 0
        }
        else {
              rover.position[1]++
        }        
      break;
      
      case 'S':
        if (rover.position[0] === 0) {
            rover.position[0] = 9
        }
        else {
              rover.position[0]-- 
        }
      break;

      case 'W':
        if (rover.position[1] === 0) {
            rover.position[1] = 9
        }
        else {
              rover.position[1]--
        }  
      break;
    }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBackward(rover) {

  switch(rover.direction) {

    case 'N':
      if (rover.position[0] === 0) {
          rover.position[0] = 9
      }
      else {
          rover.position[0]--
      }  
      break;

    case 'E':
      if (rover.position[1] === 0) {
          rover.position[1] = 9
      } 
      else {
          rover.position[1]--
      }
      break;

    case 'S':
      if (rover.position[0] === 9) {
          rover.position[0] = 0
      }
      else {
          rover.position[0]++     
      }
      break;

    case 'W':
      if (rover.position[1] === 9 ) {
          rover.position[1] = 0
      }
      else {
          rover.position[1]++        
      }
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}



function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E"
      break;
    case 'E':
      rover.direction = "S"
      break;
    case 'S':
      rover.direction = "W"
      break;
    case 'W':
      rover.direction = "N"
      break;
    }

      console.log("New Rover Direction: [" + rover.direction + "]")
      console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

}



function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W"
      break;
    case 'E':
      rover.direction = "N"
      break;
    case 'S':
      rover.direction = "E"
      break;
    case 'W':
      rover.direction = "S"
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

// ------------------------------------------------------------------------------------





// Define the ask command line to translate human orders into the rover functions.

function ask_command() {

  var command = prompt("Send a new command for the Rover: (f) for go forward, (b) for go back, (r) for turn right, (l) for turn left")
  var command_line = command.split("")

  for (var i = 0; i < command_line.length; i++) {
    if (command_line[i] === "f") {
        goForward(myRover)
    }

    else if (command_line[i] === "b") {
        goBackward(myRover)
    }

    else if (command_line[i] === "r") {
        turnRight(myRover)
    }

  else {
        turnLeft(myRover)
    }

}


}

ask_command()










