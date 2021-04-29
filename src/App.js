import './App.scss';
// import { Route, BrowserRouter } from "react-router-dom";
import ThemeProvider from "./component/ThemeProvider";

import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}


// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/">
//         {/* <Header /> */}
//         <main>
          
//         </main>
//       </Route>
//     </BrowserRouter>
//   );
// }
export default App;
