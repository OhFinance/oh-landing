import { Box, Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "components/Footer";
import { Home } from "views/Home";
import { NoMatch } from "views/NoMatch";
import { Contact } from "views/Contact";
import { Terms } from "views/Terms";
import { Header } from "components/Header";
import { Particles } from "components/Particles";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Particles />

        <Header />
        <Box my={4}>
          <Switch>
            {/* Home Page */}
            <Route exact path="/" component={Home} />

            {/* Routes */}
            <Route path="/contact" component={Contact} />
            <Route path="/terms" component={Terms} />

            {/* 404 */}
            <Route component={NoMatch} />
          </Switch>
        </Box>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
