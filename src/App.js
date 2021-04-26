import './App.scss';
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <main>
        Hello Word
      </main>
    </Route>
  </BrowserRouter>
  );
}

export default App;
