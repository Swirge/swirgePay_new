import './App.scss';
import { Route, BrowserRouter } from "react-router-dom";
import ThemeProvider from "./component/ThemeProvider";
import TeamPlayers from './sections/team-players';
import AboutUs from './sections/about-us';
import ContactUs from './sections/contact-us';
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/">
//         {/* <Header /> */}
//         <main>
//           <AboutUs />
//           <ContactUs/>
//           <TeamPlayers/>
//         </main>
//       </Route>
//     </BrowserRouter>
//   );
// }