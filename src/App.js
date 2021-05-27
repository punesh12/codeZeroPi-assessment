import { Route, Switch } from "react-router";
import "./App.css";
import FetchData from "./Components/FetchData/FetchData";
import FormData from "./Components/FormSubmit/FormData";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/api-data" component={FetchData} />
        <Route exact path="/form-data" component={FormData} />
      </Switch>
    </div>
  );
}

export default App;
