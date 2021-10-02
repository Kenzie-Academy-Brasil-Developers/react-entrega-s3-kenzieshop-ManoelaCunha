import "./App.css";
import Menu from "./components/Menu";
import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="App-header">
        <Routes />
      </div>
    </div>
  );
};

export default App;
