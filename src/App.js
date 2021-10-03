import Routes from "./routes";
import Menu from "./components/Menu";
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
