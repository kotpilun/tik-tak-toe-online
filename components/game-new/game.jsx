import { useCallback, useEffect, useMemo, useReducer } from "react";
import { PLAYERS } from "./constants";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { ComputeWinnerSymbol } from "./model/compute-winner-sybol";
import { computeWinner } from "./model/compute-winner";
import { computePlayerTimer } from "./model/compute-player-timer";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTImer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(
    1000,
    gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerSequence = useMemo(
    () => computeWinner(gameState.cells),
    [gameState],
  );
  const nextMove = getNextMove(gameState);
  const winnerSymbol = ComputeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            playersCount={4}
            isRatingGame
            timeMode={"1 минута на ход"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );

          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              timer={timer}
              timerStartAt={timerStartAt}
              symbol={player.symbol}
              isRight={index % 2 === 1}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            key={index}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      cb();
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled, cb]);
}
