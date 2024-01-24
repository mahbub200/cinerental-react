import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar></SideBar>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
