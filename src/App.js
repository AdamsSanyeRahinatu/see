import {Switch,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Navbar from "./Components/Navbar"
function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about"component={About} />
        <Route path="/services"component={Services} />
      </Switch>
    </main>
      
  );
}

export default App;
