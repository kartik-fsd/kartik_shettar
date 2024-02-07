import { useEffect, useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-md focus:outline-none hover:bg-teal-600 transition duration-300 animate-bounce"
          title="Scroll to Top"
        >
          <IoArrowUpSharp className="text-xl" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
