import './App.css';
import { animals } from './data.js';
import Main from './Main/main.js';

function App() {
  return (
    <div>
      {
        <Main animals={animals}/>
      }
    </div>
  );
}
export default App;