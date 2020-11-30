import Typing from 'react-typing-animation';
import avatar from "./avatar.jpg";
import balloon from "./Speech_balloon_distorted2.png";
import "./Frame1.css"


function Frame1() {
  return (  
    <div id="frame">
        <div id="container">
            <div id="bubble-container">
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
              <div className="bubble bubble4"></div>
              <div className="bubble bubble5"></div>
              <div className="bubble bubble6"></div>
              <div className="bubble bubble7"></div>
            </div>
            <div id="wrapping-up-and-down-container">
              <div id="avatar-container">
              </div>
            </div>
            <img id="balloon" src={balloon} alt="balloon" />
            <div id="balloon-text">
            <Typing startDelay={2000}>
                <b>Hi there! <br />My name is Andre Pestana!<br /> Welcome to my website!</b>
                <Typing.Delay ms={2000} />
                <Typing.Backspace count={60} speed={20} />
                <Typing.Speed ms={50} />
                <b>Take a look at <br />my projects and about me.<br /> Drop me a line in case you <br />have any questions!</b>
            </Typing>
            </div>
        </div>
    </div>  
  );
}

export default Frame1;