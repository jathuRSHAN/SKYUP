
import './App.css';
import Header from './components/common/heading/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import Faq from './components/pagess/Faq';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={Faq} />
        </Switch>

      </Router>

    </>
  );
}

export default App;
