import avatar from "./avatar.jpg";
import balloon from "./Speech_balloon_distorted.png";
import "./App.css";
import Typing from 'react-typing-animation';

function App() {
  return (
    <div>
      <div className="App">
        <div id="container-title">
          <div id="character-name">
            Super<br />Pestana
          </div>
          <div id="in-div">in</div>
          <div id="title">
            ANDRE PESTANA
          </div>
          <div id="subtitle">
            The Full-stack Developer!
          </div>
        </div>
        <div id="container">
          <div id="bubble-container">
            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
            <div class="bubble bubble6"></div>
            <div class="bubble bubble7"></div>
          </div>
          <div id="avatar-container">
            <img id="avatar" src={avatar} alt="avatar" />
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
            <div id="flying-saucer-container">
              <div id="flying-saucer"></div>
            </div>
            <span id="box1"></span>
            <span id="box2"></span>
            <span id="box3"></span>
            <span id="box4"></span>
            <span id="box5">
              <div class="level">
              </div>
              <div class="level">
                <span class="window"></span>
              </div>
              <div class="level">
                <span class="window"></span>
                <span class="window"></span>
              </div>
            </span>
            <span id="box6"></span>
            <span id="box7"></span>
            <span id="box8">
              <div class="level">
                <span class="window"></span>
                <span class="window"></span>
              </div>
              <div class="level">
                <span class="window"></span>
              </div>
            </span>
            <span id="box9"></span>
            <span id="box10"></span>
          </div>
        </div>
        <div id="container-frames">
          <div class="frame3"></div>
          <div id="frame4"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
