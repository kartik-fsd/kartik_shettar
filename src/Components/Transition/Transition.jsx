import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

  
  const kenBurnsVariants = {
    hidden: { scale: 0.8, blur: 10 },
    visible: {
      scale: 1,
      blur: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

const TransitionComponent = ({ children }) => (
  <AnimatePresence>
    <motion.div
      key={window.location.pathname}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={kenBurnsVariants}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

TransitionComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TransitionComponent;
