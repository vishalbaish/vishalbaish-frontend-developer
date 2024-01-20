import "./App.css";
import Home from "./components/Home";
import ListSection from "./components/ListSection";
import Loading from "./components/Loading";
import Nav from "./components/Nav";

function App() {
  return (
    <div id="app" className="App">
      <Loading />
      <Nav />
      <Home />
      <ListSection />
    </div>
  );
}

export default App;
