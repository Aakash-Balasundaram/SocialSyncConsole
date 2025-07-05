import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Infobox from './Components/Description';
import Titlespace from './Components/Titlespace';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center gap-[1.5rem] sm:gap-[2.5rem] md:gap-[3.5rem]">
        <Titlespace />
        <Infobox />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;