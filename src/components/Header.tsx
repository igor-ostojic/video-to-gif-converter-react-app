import { motion } from "framer-motion";
import Logo from "../assets/vgif-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: 25, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="logo-container"
        >
          <a href="#">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </motion.div>
        <div className="dropdown">
          <button className="about-button">
            About
            <span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <div className="dropdown-content">
            <div className="wrapper">
              <div className="left-content">
                <h3 className="sub-title">About this app</h3>
                <p>
                  <a href="https://github.com/ffmpegwasm/ffmpeg.wasm" target="_blank">
                    ffmpeg.wasm
                  </a>
                  is a pure WebAssembly / JavaScript port of FFmpeg. It enables video & audio
                  record, convert and stream right inside browsers.
                </p>
              </div>
              <div className="right-content">
                <h3 className="sub-title">Contact :</h3>
                <a href="https://github.com/igor-ostojic" target="_blank">
                  GitHub
                </a>
                <a href="mailto:igorostojic.work@gmail.com">igorostojic.work@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
