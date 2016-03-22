// Rover Mars Exercise from Ironhack Web Dev Bootcamp


// Define myRover object

var myRover = {
  name: "Roverto",
  position: [0,0], 
  direction: 'N'
};


// Define the list of obstacles objects inside the map

var obstacles = [

    { "name": "Volcano",
      "position": [0,8]
    },

    { "name": "Lake",
      "position": [9,3]
    },

    { "name": "Volcano",
      "position": [1,8]
    }
  ];



// Define a function to check space availability. Parameters of this function will be the ones obtained by the movement functions.

function free_space(y,x) {
  var crash
  for (var index = 0; index < obstacles.length; index++) {
      if ((obstacles[index].position[0] === y ) && (obstacles[index].position[1] === x)) {
        crash = true;
        return crash
      }

      else {
        crash = false
        return crash
      } 
  }
}




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

// Check if the next position is occupied by an object. Added +1 for that purpose in index = 0 as it is going N direction.

                    var accident = free_space(rover.position[0] + 1, rover.position[1])
                     if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[0]++
                      }
             }
      break;
      
      case 'E':
        if (rover.position[1] === 9) {
            rover.position[1] = 0
        }
        else {

                    var accident = free_space(rover.position[0], rover.position[1] + 1)
                     if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[1]++
                      }
        }        
      break;
      
      case 'S':
        if (rover.position[0] === 0) {
            rover.position[0] = 9
        }
        else {
                    var accident = free_space(rover.position[0] - 1, rover.position[1])
                    if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                    else {
                         rover.position[0]-- 
                    }  
        }
      break;

      case 'W':
        if (rover.position[1] === 0) {
            rover.position[1] = 9
        }
        else {

                    var accident = free_space(rover.position[0], rover.position[1] - 1)
                    if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[1]--
                      }
        }  
      break;
    }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}



// ------------------------------------------------------------------------------------



function goBackward(rover) {

  switch(rover.direction) {

    case 'N':
      if (rover.position[0] === 0) {
          rover.position[0] = 9
      }
      else {
              var accident = free_space(rover.position[0] - 1, rover.position[1])
                     if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[0]--
                      }
      }  
      break;

    case 'E':
      if (rover.position[1] === 0) {
          rover.position[1] = 9
      } 
      else {

                    var accident = free_space(rover.position[0], rover.position[1] - 1)
                     if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[1]--
                      }
      }     

      break;

    case 'S':
      if (rover.position[0] === 9) {
          rover.position[0] = 0
      }
      else {
                    var accident = free_space(rover.position[0] + 1, rover.position[1])
                    if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                    else {
                         rover.position[0]++ 
                    }  
      }
      break;


    case 'W':
      if (rover.position[1] === 9 ) {
          rover.position[1] = 0
      }
 
      else {
                    var accident = free_space(rover.position[0], rover.position[1] + 1)
                    if ( accident === true ) {
                        alert(myRover.name + " has crashed with an obstacle. GAME OVER!")
                      }

                     else {
                        rover.position[1]++
                      }
        }  
      break;


  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}




// ------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------

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










