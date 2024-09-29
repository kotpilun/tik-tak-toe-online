import clsx from "clsx";
import { GameTitle } from "./game-title";

export function GameLayout({ backlink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="pl-2">
        {backlink}
        {title}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3"
        }
      >
        {playersList}
      </div>
    </div>
  );
}
