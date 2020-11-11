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
import mobile from "./images/mobile.png";
import Details from "./components/Performance/Details";
import Terms from "./components/Terms";
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
                          <Route exact path="/terms" component={Terms} />
                          {data.performanceLoaded ? (
                            <Route
                              path="/performance/:id"
                              component={Details}
                            />
                          ) : (
                            ""
                          )}
                          <Route path="/performance" component={Performance} />
                          {auth.isAuth ? (
                            ""
                          ) : (
                            <Route exact path="/login" component={Login} />
                          )}
                          {auth.isAuth ? (
                            <Route exact path="/panel/add" component={Add} />
                          ) : (
                            ""
                          )}
                          {auth.isAuth ? (
                            <Route exact path="/panel/list" component={List} />
                          ) : (
                            ""
                          )}
                          {auth.isAuth ? (
                            <Redirect from="/login" to="/panel/list" exact />
                          ) : (
                            ""
                          )}
                          {auth.isAuth ? (
                            ""
                          ) : (
                            <Redirect from="/panel/add" to="/login" exact />
                          )}
                          {auth.isAuth ? (
                            ""
                          ) : (
                            <Redirect from="/panel/list" to="/login" exact />
                          )}
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
    <div className="text-center text-capitalize">
      <img
        style={{ maxWidth: `70%` }}
        className="d-inline-block my-3"
        width="400px"
        src={mobile}
        alt="ABV"
      />
      <h3 style={{ fontFamily: `Oswald`, fontSize: `5rem` }} className="p-2">
        This website is not optimized for Mobile devices. Please visit from your Desktop/Laptop
      </h3>
    </div>
  );
}

export default App;
