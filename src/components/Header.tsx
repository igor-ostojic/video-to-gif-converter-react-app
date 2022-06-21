import Logo from "../assets/vgif-logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
