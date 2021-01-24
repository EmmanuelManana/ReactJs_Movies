import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./Styles/App.css";
import "./Styles/Row.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import request from "./API/request";
import AboutMovie from "./Components/AboutMovie";
import AboutDev from "./Components/AboutDev";
import LandingPage from "./Components/LandingPage";

function App() {

  return (
    <Router>

      <div className="app">
        <Header />
        <Switch>
          <Route path="/home">
            <Movies fetchUrl={request.fetchPlayingNow} />
          </Route>

          <Route path="/popular">
            <Movies fetchUrl={request.fetchPopular} />
          </Route>

          <Route path="/aboutmovie/:id" component={AboutMovie}></Route>
          <Route path="/aboutdev" component={AboutDev}></Route>
          <Route path="/" component={LandingPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
