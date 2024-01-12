import './App.css';
import Homepage from './pages/Index';

function App() {
  const value = false;
  return (
    <div className='App'>
      {value ? "Benar" : "Salah"}
      <Homepage />
    </div>
  )
}

export default App
