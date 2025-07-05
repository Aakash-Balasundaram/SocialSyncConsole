import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Infobox from './Components/Description';
import Lamp from './Components/Lamp';

function App() {
  return (
    <div className="flex flex-col gap-[1rem] sm:gap-[2rem] md:gap-[3rem]">
      <Navbar />
      <Infobox />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;