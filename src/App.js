import "./App.css";
import Menu from "./components/Menu";
import Routes from "./routes";
import GlobalStyles from "./styles/stylesGlobal";

const App = () => {
  return (
    <main>
      <Menu />
      <Routes />
      <GlobalStyles />
    </main>
  );
};

export default App;
