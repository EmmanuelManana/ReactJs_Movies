import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./Styles/App.css";
import "./Styles/Row.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import request from "./Request/request";
import AboutMovie from "./Components/AboutMovie";

function App() {
  return (
    <Router>
      {/* // Bem naming naming convention. */}
      <div className="app">
        <Header />
        <Switch>
          <Route path="/home">
            {/* must rename hoem to genre or fetch movies*/}
            <Movies fetchUrl={request.fetchPlayingNow} />
          </Route>

          <Route path="/popular">
            <Movies fetchUrl={request.fetchTrending} />
          </Route>

          <Route path="/aboutmovie/:id" component={AboutMovie}></Route>

          <Route path="/">
            <h1>This will be the landing page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
