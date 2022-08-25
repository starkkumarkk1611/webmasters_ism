// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";
import TopBar from "./componenets/headers/TopBar";
import Header from "./componenets/headers/Header";
function App() {
  return (
    <div >
      <TopBar />
      <Header />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
