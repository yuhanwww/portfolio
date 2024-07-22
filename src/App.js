import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects";
import Gallery from "./components/Gallery/gallery";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
