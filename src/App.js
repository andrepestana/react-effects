import logo from "./avatar.jpg";
import balloon from "./Speech_balloon_distorted.png";
import "./App.css";
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="App">
      <h1 id="title">ANDRE PESTANA</h1>
      <div id="container">
        <div id="avatar-container">
          <img id="avatar" src={logo} alt="logo" />
        </div>
        <img id="balloon" src={balloon} alt="balloon" />
        <div id="balloon-text">
          <Typing startDelay="2000">
            <b>Hi there! <br />My name is Andre Pestana!<br /> Welcome to my website!</b>
            <Typing.Delay ms={2000} />
            <Typing.Backspace count={60} speed={20} />
            <Typing.Speed ms={50} />
            <b>Take a look at <br />my projects and about me.<br /> Drop me a line in case you <br />have any questions!</b>
          </Typing>
        </div>
      </div>
      <div id="container-frames">
        <div id="frame"></div>
        <div id="frame2">
          <span id="box1"></span>
          <span id="box2"></span>
          <span id="box3"></span>
          <span id="box4"></span>
          <span id="box5"></span>
          <span id="box6"></span>
          <span id="box7"></span>
          <span id="box8">
            <span class="w"></span>
            <span class="w"></span>
          </span>
          <span id="box9"></span>
          <span id="box10"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
