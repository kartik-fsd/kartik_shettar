import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/footer";
import HeaderNavbar from "./Components/Header/navbar";
import LoadingPage from "./Components/Loader/Loader";
import ScrollToTopButton from "./Components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-900 h-full flex flex-col min-h-screen justify-between">
      <HeaderNavbar />
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
