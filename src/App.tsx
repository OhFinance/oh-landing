import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { Landing } from "views/Landing";
import { NoMatch } from "views/NoMatch";
import { About } from "views/About";
import { Contact } from "views/Contact";
import { Terms } from "views/Terms";

const App = () => {
  return (
    <Router basename="/">
      <NavBar />

      <Box my={4}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route component={NoMatch} />
        </Switch>
      </Box>

      <Footer />
    </Router>
  );
};

export default App;
