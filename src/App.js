import './App.css';
import Header from './Header.js';
import Searchbar from './Searchbar.js';
import Button from './Button.js';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Searchbar />
            <div className="button-container">
                <Button name="Google Search" url="https://www.google.com"/>
                <Button name="I'm Feeling Lucky" url="https://www.google.com/doodles"/>
            </div>
        </div>
    )
}

export default App;
