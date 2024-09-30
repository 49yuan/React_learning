import { Header } from "./components/header";
import { NavIcon } from "./components/navicon";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Recipe } from "./components/recipe";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
