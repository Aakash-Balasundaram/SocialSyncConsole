import './App.css'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <div className='flex flex-col gap-4rem'>
        <Navbar />
      </div>
      <div>
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
