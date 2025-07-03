import './App.css'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div >
      <Navbar />
      <main className="pt-16"> {/* pt-16 ≈ padding-top: 4rem to push below navbar */}
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
