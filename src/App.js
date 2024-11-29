import logo from './logo.svg';
import './App.css';
import { IVFCalculatorHome } from './componentsHome/ivfCalculator/IVFCalculator';
import CalculatorResult from './components/calculatorResult';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IVFCalculatorHome />} />
        <Route path="/result" element={<CalculatorResult />} />
      </Routes>
    </Router>
  );
}

export default App;
