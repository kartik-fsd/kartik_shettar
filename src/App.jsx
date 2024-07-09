import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/footer";
import HeaderNavbar from "./Components/Header/navbar";
import LoadingPage from "./Components/Loader/Loader";
import ScrollToTopButton from "./Components/ScrollToTop/ScrollToTop";
import { Routers } from "./Routes/route";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Simulate an asynchronous operation
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  return (
    <>
      <div className="bg-gray-900 h-full flex flex-col min-h-screen justify-between">
        {/* <HeaderNavbar /> */}
        {loading ? <LoadingPage /> : <Routers />}
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
