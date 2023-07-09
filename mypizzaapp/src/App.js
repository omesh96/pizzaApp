

import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Pages/SliderAnimation';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Slider />
    <AllRoutes />
    </div>
  );
}

export default App;
