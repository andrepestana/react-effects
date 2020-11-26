import { useState }  from 'react';
import "./Frame2.css"


function Frame1() {
    const [state, setState] = useState({gameScore:0});
    const addToGameScore = (score) => {
      const newGameScore = state.gameScore + score;
      setState({ gameScore: newGameScore});
    }
    return ( 
        <div id="frame2">
            {state.gameScore ? <div id="game-score">{state.gameScore}</div> : ''}
            <div id="flying-saucer-container">
                <div id="wrapping-flying-saucer">
                <div id="flying-saucer" onMouseDown={() => { addToGameScore(10);console.log('Boom!');}} ></div>
                </div>
            </div>
            <span id="box1"></span>
            <span id="box2"></span>
            <span id="box3"></span>
            <span id="box4"></span>
            <span id="box5">
                <div className="level">
                </div>
                <div className="level">
                <span className="window"></span>
                </div>
                <div className="level">
                <span className="window"></span>
                <span className="window"></span>
                </div>
            </span>
            <span id="box6"></span>
            <span id="box7"></span>
            <span id="box8">
                <div className="level">
                <span className="window"></span>
                <span className="window"></span>
                </div>
                <div className="level">
                <span className="window"></span>
                </div>
            </span>
            <span id="box9"></span>
            <span id="box10"></span>
        </div>    
    );
}

export default Frame1;