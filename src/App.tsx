// layout
import MainLayout from "./pages/layout/MainLayout";
import Header from "./pages/layout/Header/Header";
// content
import GamePage from "./pages/GamePage";
// context
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <MainLayout>
      <GameProvider>
        <Header />
        <GamePage />
      </GameProvider>
    </MainLayout>
  );
}

export default App;
