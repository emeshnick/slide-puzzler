const CREATE_BOARD = "CREATE_BOARD";
const MOVE_SQUARE = "MOVE_SQUARE";

export const createBoard = (width) => {
  return {
    type: CREATE_BOARD,
    width,
  };
};

export const moveSquare = (positionNum) => {
  return {
    type: MOVE_SQUARE,
    positionNum,
  };
};

const initialState = {
  solved: false,
  width: 5,
  currentPositions: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default board;
