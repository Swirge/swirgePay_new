import "./App.scss";
import AppRoutes from "./routes";
import ThemeProvider from "./component/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
