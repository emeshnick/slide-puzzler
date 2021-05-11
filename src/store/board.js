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
  return {
    type: SHUFFLE_BOARD,
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
  let isEmpty = width ** 2 - 1;
  const emptySquareIdx = arr.indexOf(isEmpty);
  const emptySquareRow = Math.floor(emptySquareIdx / width);
  const emptySquareCol = emptySquareIdx % width;
  console.log(emptySquareRow, emptySquareCol);

  //Check if empty square is in the same row
  if (emptySquareRow === Math.floor(positionNum / width)) {
    console.log("same row");
    if (emptySquareCol < positionNum % width) {
      for (let i = emptySquareIdx; i < positionNum; i++) {
        arr[i] = arr[i + 1];
      }
    } else {
      for (let i = emptySquareIdx; i > positionNum; i--) {
        arr[i] = arr[i - 1];
      }
    }
  }
  //Check if empty square is in the same column
  else if (emptySquareCol === positionNum % width) {
    console.log("same column");
    if (emptySquareRow < Math.floor(positionNum / width)) {
      for (let i = emptySquareIdx; i < positionNum; i += width) {
        arr[i] = arr[i + width];
      }
    } else {
      for (let i = emptySquareIdx; i > positionNum; i -= width) {
        arr[i] = arr[i - width];
      }
    }
  }
  arr[positionNum] = isEmpty;
  return arr;
};

const checkSolved = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return false;
    }
  }
  return true;
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
      return { ...state, solved: false, currentPositions: newPositions };
    case MOVE_SQUARE:
      const movedPositions = changePositions(
        action.positionNum,
        state.width,
        state.currentPositions
      );
      const solved = checkSolved(movedPositions);
      return { ...state, solved: solved, currentPositions: movedPositions };
    default:
      return state;
  }
};

export default board;
