import "./App.css";
import Footer from "./Components/Footer/footer";
import HeaderNavbar from "./Components/Header/navbar";
import ScrollToTopButton from "./Components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-50 sh-full flex flex-col min-h-screen justify-between">
      <HeaderNavbar />
      <Home />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
