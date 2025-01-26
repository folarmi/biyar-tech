import "./App.css";

import { BrowserRouter } from "react-router";
import { RoutePage } from "./utils/RoutePage";

function App() {
  return (
    <BrowserRouter>
      <RoutePage />
    </BrowserRouter>
  );
}

export default App;
