import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/layout/Footer";
import Main from "./component/layout/Main";
import Navbar from "./component/layout/Navbar";
import MovieDetail from "./component/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Main /> */}
        <Footer />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path={"/movie/:id"} component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
