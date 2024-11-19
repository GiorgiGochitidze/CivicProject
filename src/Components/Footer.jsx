import "../CSS/Footer.css";
import logoImage from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{opacity: 0, x: 500}} animate={{opacity: 1, x: 0}} transition={{delay: 0.9}}>
      <p>
        Powered By:{" "}
        <img
          style={{ width: "50px" }}
          src={logoImage}
          alt="Web Canvas logo image"
        />{" "}
        <a style={{color: 'white', textDecoration: "none"}} href="https://webcanvasgeo.netlify.app/" target="_blank">Web Canvas</a>
      </p>
    </motion.footer>
  );
};

export default Footer;
