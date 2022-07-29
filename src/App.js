import './App.css';
import News from './component/News';
import Navbar from './component/Navbar';

function App() {
  return (
    <>   
    <Navbar/> 
    <h1 className="text-center">This is News Website</h1>
    <News/>
    </>
  );
}

export default App;
