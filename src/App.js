import './App.scss';
import { Route, BrowserRouter } from "react-router-dom";
import TeamPlayers from './sections/team-players';
import AboutUs from './sections/about-us';
import ContactUs from './sections/contact-us';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        {/* <Header /> */}
        <main>
          <AboutUs />
          <ContactUs/>
          <TeamPlayers/>
        </main>
      </Route>
  </BrowserRouter>
  );
}

export default App;
