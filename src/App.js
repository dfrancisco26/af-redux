import './App.css';
import { animals } from './data.js';
import Main from './Main/main.js';
import backgroundImage from './background.png';

function App() {
  return (
    <div className='animalsDiv' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {
        <Main animals={animals}/>
      }
    </div>
  );
}
export default App;