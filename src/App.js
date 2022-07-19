import AboutMe from "./components/AboutMe";
import Header from "./components/layouts/Header";
import Cover from "./components/cover";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Cover />
      <Header />
      <main>
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}

export default App;
