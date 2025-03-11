import './App.scss';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';  // ✅ Correct import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     
      <Home />
    
  );
}

export default App;
