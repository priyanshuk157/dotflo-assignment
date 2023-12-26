
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Window from './Pages/Window1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="window" element={<Window/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
