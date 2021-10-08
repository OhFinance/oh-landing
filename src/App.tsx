import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "views/Home";
import { NoMatch } from "views/NoMatch";
import { Contact } from "views/Contact";
import { Terms } from "views/Terms";
import { AppContainer } from "components/AppContainer";
import { ScrollManager } from "@ohfinance/oh-ui";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AppContainer>
        <Switch>
          {/* Home Page */}
          <Route exact path="/" component={Home} />

          {/* Routes */}
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />

          {/* 404 */}
          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
