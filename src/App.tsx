// layout
import MainLayout from "./layout/MainLayout";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer";
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
        <Footer />
      </GameProvider>
    </MainLayout>
  );
}

export default App;
