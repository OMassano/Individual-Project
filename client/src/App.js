import { Landing, Home, Form, Detail, About } from "./views";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/homepage" render={() => <Home />} />
      <Route path="/dog-detail" render={() => <Detail />} />
      <Route path="/create-dog" render={() => <Form />} />
      <Route path="/about" render={()=><About/>}></Route>
    </div>
  );
}

export default App;
