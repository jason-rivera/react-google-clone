import "./App.css";
import Title from "./Title.js";
import Searchbar from "./Searchbar.js";
import Button from "./Button.js";
import Navbar from "./Navbar.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Searchbar />
      <div className="button-container">
        <Button name="Google Search" url="https://www.google.com" />
        <Button name="I'm Feeling Lucky" url="https://www.google.com/doodles" />
      </div>
      <div>
        Google offered in:{" "}
        <a id="french-link" href="#">
          Français
        </a>
      </div>
    </div>
  );
};

export default App;
