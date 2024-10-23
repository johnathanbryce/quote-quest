// layout
import MainLayout from "./layout/MainLayout";
import Header from "./layout/Header/Header";
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
