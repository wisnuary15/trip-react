import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import Offers from "./components/offers.jsx";
import Plan from "./components/plan.jsx";
import Rooms from "./components/rooms.jsx"
import Imageslider from "./components/imageslider.jsx"
import Footer from "./components/footer.jsx"

function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Imageslider />
      <Footer />
    </div>
  );
}

export default App;
