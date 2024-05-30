import "./App.css";
import "../Components/common/button";
import { Header } from "../Components/Header";
import { MainContent } from "../Components/MainContent";
import { ProductSection } from "../Components/ProductSection";
import { FAQ } from "../Components/FAQ";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
