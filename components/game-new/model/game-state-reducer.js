import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const gameStateReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index } = action;

      if (state.cells[index]) return;

      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.playersTimeOver,
        ),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell,
        ),
      };
    }

    default: {
      return state;
    }
  }
};

export const initGameState = ({ playersCount, defaultTImer }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTImer;
    }
    return timers;
  }, {}),
});
