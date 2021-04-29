import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="left-nav">
          <a
            className="nav-item"
            href="https://about.google/?fg=1&utm_source=google-CA&utm_medium=referral&utm_campaign=hp-header"
          >
            About
          </a>
          <a
            className="nav-item"
            href="https://store.google.com/CA/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-CA"
          >
            Store
          </a>
        </div>

        <div className="right-nav">
          <a
            className="nav-item"
            href="https://accounts.google.com/b/0/AddMailService"
          >
            Gmail
          </a>
          <a
            className="nav-item"
            href="https://www.google.ca/imghp?hl=en&authuser=0&ogbl"
          >
            Images
          </a>
          <a className="nav-item image" href="https://www.google.ca/imghp?hl=en&authuser=0&ogbl">
            <img
              className="image"
              src="https://i.imgur.com/CXxxZ4a.jpg"
              alt=""
            />
          </a>
          <a className="nav-item image" href="https://www.gmail.com">
            <img
              className="image"
              src="https://i.imgur.com/H2WTqPA.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
