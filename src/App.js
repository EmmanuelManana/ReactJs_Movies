import Header from './Components/Header';
import Home from './Components/Home';
// import Row from './Components/Row';
import './Styles/App.css';
import './Styles/Row.css'

function App() {
  return (
    // Bem naming naming convention.
    <div className="app">
     {/* Header */}
     <Header />
     {/* Home */}
     <Home />
     {/* <Row title="Top rated" fetchUrl={requests.fetchTopRated}/> */}
    </div>
  );
}

export default App;
