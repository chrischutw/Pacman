import * as map from './map';
import readline from 'readline';

//Create a standard input interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please place the position(x,y,f) of Pacman\n', answer => {
  answer = answer.toUpperCase().split(' ');
  if (answer[0] === 'PLACE') {
    const position = answer[1].split(',');
    if (map.validation(position[0], position[1], position[2])) {
      map.placeFunction(position[0], position[1], position[2]);
    } else {
      return false;
    }
  } else {
    console.log('Please restart the game');
    rl.close();
  }
  rl.on('line', input => {
    input = input.toUpperCase();
    if (input === 'MOVE') {
      map.moveFunction();
    }
    if (input === 'LEFT') {
      map.turnLeft();
    }
    if (input === 'RIGHT') {
      map.turnRight();
    }
    if (input === 'REPORT') {
      map.reportFunction();
    }
    if (input === 'END') {
      rl.close();
    }
  });
});
