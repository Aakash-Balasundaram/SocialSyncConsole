import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Infobox from './Components/Description';

function App() {
  return (
    <div className="flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem]">
      <Navbar />
      <Infobox />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;