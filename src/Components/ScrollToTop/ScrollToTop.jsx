import { useEffect, useState, useRef } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null); // Ref for button visibility checks

  const toggleVisibility = () => {
    if (buttonRef.current && buttonRef.current.getBoundingClientRect().top < 400) {
      setIsVisible(false); // Hide if too close to top
    } else if (window.scrollY > 150) {
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
    const handleScroll = () => toggleVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true }); // Passive for performance

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          ref={buttonRef} // Attach ref for visibility checks
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-md focus:outline-none hover:bg-teal-600 transition duration-300 animate-bounce"
          aria-label="Scroll to Top"
          title="Scroll to top"
        >
          <IoArrowUpSharp className="text-xl" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
