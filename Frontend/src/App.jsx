import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Infobox from './Components/Description';
import Titlespace from './Components/Titlespace';
import Analysis from './Components/Analysis';
import Spotlight from './Components/SpotlightCursor';


function App() {
  return (
    <div className="min-h-screen flex flex-col gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]">
      <Spotlight />
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-[0.75rem] sm:gap-[1.75rem] md:gap-[2.75rem] pt-[4rem] sm:pt-[6rem] md:pt-[8rem]">
          <Titlespace />
          <Infobox />
          <Dashboard />
        </div>
        <div className="mt-[3rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[6rem]">
          <Analysis />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;