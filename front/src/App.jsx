import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
