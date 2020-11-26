import "./App.css";
import Title from './containers/Title/Title';
import Frame1 from './containers/Frame1/Frame1';
import Frame2 from './containers/Frame2/Frame2';
import Frame3 from './containers/Frame3/Frame3';
import Frame4 from './containers/Frame4/Frame4';

function App() {
  return (
    <div>
      <div className="App">
        <div id="title-container">
          <Title />
        </div>
        <div id="container-frames">
          <Frame1 />
          <Frame2 />
        </div>
        <div id="container-frames">
          <Frame3 />
          <Frame4 />
        </div>
      </div>

    </div>
  );
}

export default App;
