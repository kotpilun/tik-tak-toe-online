import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({
  index,
  onClick,
  isWinner,
  disabled,
  symbol,
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center hover:bg-slate-100",
        isWinner && "bg-orange-600/10 hover:bg-orange-600/10",
      )}
      onClick={() => onClick(index)}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
});
