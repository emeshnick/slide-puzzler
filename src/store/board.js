const CREATE_BOARD = "CREATE_BOARD";
const SHUFFLE_BOARD = "SHUFFLE_BOARD";
const MOVE_SQUARE = "MOVE_SQUARE";

export const createBoard = (width) => {
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

export const shuffleBoard = () => {
  console.log("shuffling...");
  return {
    type: SHUFFLE_BOARD,
  };
};

export const moveSquare = (positionNum) => {
  console.log("clicked on tile at", positionNum);
  return {
    type: MOVE_SQUARE,
    positionNum,
  };
};

const initialState = {
  solved: false,
  width: 5,
  currentPositions: [],
};

const shuffle = (arr) => {
  var currentIndex = arr.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const changePositions = (positionNum, width, arr) => {
  let temp = arr[positionNum];
  let isEmpty = width ** 2 - 1;
  if (arr[positionNum - 1] === isEmpty) {
    arr[positionNum] = arr[positionNum - 1];
    arr[positionNum - 1] = temp;
  } else if (arr[positionNum + 1] === isEmpty) {
    arr[positionNum] = arr[positionNum + 1];
    arr[positionNum + 1] = temp;
  } else if (arr[positionNum - width] === isEmpty) {
    arr[positionNum] = arr[positionNum - width];
    arr[positionNum - width] = temp;
  } else if (arr[positionNum + width] === isEmpty) {
    arr[positionNum] = arr[positionNum + width];
    arr[positionNum + width] = temp;
  }
  return arr;
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        solved: false,
        width: action.width,
        currentPositions: action.initialPositions,
      };
    case SHUFFLE_BOARD:
      const newPositions = shuffle(state.currentPositions);
      return { ...state, currentPositions: newPositions };
    case MOVE_SQUARE:
      const movedPositions = changePositions(
        action.positionNum,
        state.width,
        state.currentPositions
      );
      return state;
    default:
      return state;
  }
};

export default board;
