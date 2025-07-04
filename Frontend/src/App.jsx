import './App.css'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Infobox from './Components/Infobox'

function App() {
  return (
    <div>
      <div className='flex flex-col gap-2rem'>
        <Navbar />
      </div>
      <div>
        <Infobox />
      </div>
    <div>
        <Dashboard />
    </div>
      <Footer />
    </div>
  );
}

export default App;
