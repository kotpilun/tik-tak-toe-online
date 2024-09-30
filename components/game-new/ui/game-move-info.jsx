import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ nextMove, currentMove }) {
  return (
    <>
      <div className="flex gap-1 items-center text-slate-900 text-xl leading-tight font-semibold ">
        Ход:
        <GameSymbol symbol={currentMove} />
      </div>
      <div className="flex gap-1 items-center text-slate-400 text-xs leading-tight">
        Следующий:
        <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
