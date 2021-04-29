import { Route, BrowserRouter, Switch } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import Contact from "./page/Contact";
import FAQ from "./page/FAQ";
import Features from "./page/Features";
import Github from "./page/Github";
import Homepage from "./page/Homepage";
import NotFound from "./page/NotFound";
import Team from "./page/Team";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/github" component={Github} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/features" component={Features} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
