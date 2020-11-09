import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Setup from "./components/Setup";
import Performance from "./components/Performance";
import Login from "./components/Login";
import Footer from "./components/Layout/Footer";
import DataContextProvider, { DataContext } from "./context/DataContext";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import Add from "./components/Panel/Add";
import List from "./components/Panel/List";
import Details from "./components/Performance/Details";
function App() {
  return window.innerWidth > 992 ? (
    <BrowserRouter>
      <DataContextProvider>
        <AuthContextProvider>
          <DataContext.Consumer>
            {(data) => {
              return (
                <AuthContext.Consumer>
                  {(auth) => {
                    return (
                      <div className="App">
                        <Header />
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/setup" component={Setup} />
                          {data.performanceLoaded ? <Route path="/performance/:id" component={Details} /> : ""}
                          <Route path="/performance" component={Performance} />
                          {auth.isAuth ? "" : <Route exact path="/login" component={Login} />}
                          {auth.isAuth ? <Route exact path="/panel/add" component={Add} /> : ""}
                          {auth.isAuth ? <Route exact path="/panel/list" component={List} /> : ""}
                          {auth.isAuth ? <Redirect from="/login" to="/panel/list" exact /> : ""}
                          {auth.isAuth ? "" : <Redirect from="/panel/add" to="/login" exact />}
                          {auth.isAuth ? "" : <Redirect from="/panel/list" to="/login" exact />}
                        </Switch>
                        <Footer />
                      </div>
                    );
                  }}
                </AuthContext.Consumer>
              );
            }}
          </DataContext.Consumer>
        </AuthContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  ) : (
    <h1 className="text-center text-capitalize text-white" style={{ fontFamily: `Audiowide` }}>
      This website is not compatable with mobile devices please operate it on Desktop / Laptop
    </h1>
  );
}

export default App;
