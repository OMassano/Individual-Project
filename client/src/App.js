import { Landing, Home, Form, Detail, About } from "./views";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      {// eslint-disable-next-line no-restricted-globals
      location.pathname !== "/" && <NavBar />}

      <Route exact path="/" render={() => <Landing />} />
      <Route path="/homepage" render={() => <Home />} />
      <Route path="/dog-detail" render={() => <Detail />} />
      <Route path="/create-dog" render={() => <Form />} />
      <Route path="/about" render={() => <About />}></Route>
    </div>
  );
}

export default App;
