import pacman from './pacman';

const GRID_MAX = 4;
const GRID_MIN = 0;

const direction = {
  0: 'WEST',
  1: 'SOUTH',
  2: 'EAST',
  3: 'NORTH'
};

//Transform the direction into number
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//const direction = new Map({ 0: 'EAST', 1: 'SOUTH', 2: 'WEST', 3: 'NORTH' });

export const placeFunction = (x, y, f) => {
  (pacman.x = x), (pacman.y = y);
  pacman.f = parseInt(getKeyByValue(direction, f));
};

//0:WEST, 1:SOUTH, 2:EAST, 3:NORTH
//To currectly perform the pacman's direction when its key is less than 0
//ex: WEST(0) turn right should be NORTH(3)
//so (0-1+4)%4 = 3%4 = 3
export const turnRight = () => {
  pacman.f = (pacman.f - 1 + 4) % 4;
};
//0:WEST, 1:SOUTH, 2:EAST, 3:NORTH
//To currectly perform the pacman's direction when its key is greater than 3
//ex: NORTH(3) turn left should be WEST(0)
//so (3+1)%4 = 4%4 = 0
export const turnLeft = () => {
  pacman.f = (pacman.f + 1) % 4;
};

//0:WEST, 1:SOUTH, 2:EAST, 3:NORTH
export const moveFunction = () => {
  switch (pacman.f) {
    case 0: {
      pacman.x--;
      moveCheckX(pacman.x);
      break;
    }
    case 1: {
      pacman.y--;
      moveCheckY(pacman.y);
      break;
    }
    case 2: {
      pacman.x++;
      moveCheckX(pacman.x);
      break;
    }
    case 3: {
      pacman.y++;
      moveCheckY(pacman.y);
      break;
    }
  }
};

export const reportFunction = () => {
  console.log(`Output:  ${pacman.x},${pacman.y},${direction[pacman.f]}`);
};

export const validation = (x, y, f) => {
  if (x > GRID_MAX || x < GRID_MIN) {
    console.log('Please enter the right x value');
    return false;
  }
  if (y > GRID_MAX || y < GRID_MIN) {
    console.log('Please enter the right y value');
    return false;
  }

  if (f == 'EAST' || f == 'SOUTH' || f == 'WEST' || f == 'NORTH') {
    return true;
  } else {
    console.log('Please enter the right f value');
    return false;
  }
};

//Each of direction of x and y will won't be changed if it is on the edge.
export const moveCheckX = x => {
  if (x > GRID_MAX) {
    pacman.x = GRID_MAX;
    return false;
  } else if (x < GRID_MIN) {
    pacman.x = GRID_MIN;
    return false;
  } else {
    return true;
  }
};
export const moveCheckY = y => {
  if (y > GRID_MAX) {
    pacman.y = GRID_MAX;
    return false;
  } else if (y < GRID_MIN) {
    pacman.y = GRID_MIN;
    return false;
  } else {
    return true;
  }
};
