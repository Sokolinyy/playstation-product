import Dualsense from "./components/Dualsense";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Dualsense />
    </div>
  );
}

export default App;
