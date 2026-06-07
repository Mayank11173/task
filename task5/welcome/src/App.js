import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
