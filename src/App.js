import logo from "./avatar.jpg";
import balloon from "./Speech_balloon.svg";
import "./App.css";
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="App">
      <div id="container">
        <img id="avatar" src={logo} alt="logo" />
        <img id="balloon" src={balloon} alt="balloon" />
        <div id="balloon-text">
          <Typing><b>Hi there! <br />My name is Andre Pestana!<br /> Welcome to my website!</b></Typing>
        </div>
      </div>
    </div>
  );
}

export default App;
