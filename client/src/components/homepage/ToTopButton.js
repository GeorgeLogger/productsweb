import { FaArrowUp } from "react-icons/fa";
import "./ToTopButton.css";

const ToTopButton = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button id="btnScrollToTop" onClick={ScrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ToTopButton;
