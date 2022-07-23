import AboutMe from "./components/AboutMe";
import Header from "./components/layouts/Header";
import Cover from "./components/cover";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <Cover />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
