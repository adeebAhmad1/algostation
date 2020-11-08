import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Setup from "./components/Setup";
import Performance from "./components/Performance";
import Footer from "./components/Layout/Footer";
function App() {
  
  return (
    window.innerWidth > 992 ? <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/performance" component={Performance} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter> : <h1 className="text-center text-capitalize text-white" style={{fontFamily: `Audiowide`}}>This website is not compatable with mobile devices please operate it on Desktop / Laptop </h1>
  );
}

export default App;
