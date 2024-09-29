import { GameField, GameTitle, GameInfo } from "../components/game";
import { useGameState } from "../components/game/use-game-state";
import { Header } from "../components/header";
import { useState } from "react";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <HomePageLayout header={<Header />}>
      <GameTitle playersCount={playersCount} />
      <GameInfo
        className="mt-4"
        playersCount={playersCount}
        currentMove={currentMove}
        isWinner={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
      />
      {winnerSymbol}
      <UiModal
        width="md"
        isOpen={winnerSymbol}
        onClose={() => console.log("close")}
      >
        <UiModal.Header>Игра завершена</UiModal.Header>
        <UiModal.Body className="text-sm ">
          <div>
            Победитель: <span className="text-teal-600">Oleg</span>
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton variant="outline" size="md">
            Вернуться
          </UiButton>
          <UiButton variant="primary" size="md">
            Играть снова
          </UiButton>
        </UiModal.Footer>
      </UiModal>
      <GameField
        className="mt-6"
        cells={cells}
        currentMove={currentMove}
        nextMove={nextMove}
        handleCellClick={handleCellClick}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
