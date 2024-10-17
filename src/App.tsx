// layout
import MainLayout from "./layout/MainLayout";
import ContentLayout from "./layout/ContentLayout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// content
import GamePage from "./pages/GamePage";

function App() {
  return (
    <MainLayout>
      <Header />
      <ContentLayout>
        <GamePage />
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
}

export default App;
