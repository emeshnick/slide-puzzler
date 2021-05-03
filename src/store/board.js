const CREATE_BOARD = "CREATE_BOARD";
const MOVE_SQUARE = "MOVE_SQUARE";

export const createBoard = (width) => {
  //Create logic to shuffle the initial positions of the board
  const size = width ** 2;
  const initialPositions = [];
  for (let i = 0; i < size; i++) {
    initialPositions.push(i);
  }

  return {
    type: CREATE_BOARD,
    width,
    initialPositions,
  };
};

export const moveSquare = (positionNum) => {
  return {
    type: MOVE_SQUARE,
    positionNum,
  };
};

//Add variable that tracks the index of the empty square to easily change the index of the empty and not empty
const initialState = {
  solved: false,
  width: 5,
  currentPositions: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        solved: false,
        width: action.width,
        currentPositions: action.initialPositions,
      };
    case MOVE_SQUARE:
      return state;
    default:
      return state;
  }
};

export default board;
