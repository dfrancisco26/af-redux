import './App.css';
import { animals } from './data.js';
import Main from './Main/main.js';
import backgroundImage from './background.png';
import Header from './Header/header.js';

function App() {
  return (
    <>
      {
        <Header email={'dfrancisco2677@gmail.com'}/>
      }
      <div className='animalsDiv' style={{ backgroundImage: `url(${backgroundImage})` }}>
        {
          <Main animals={animals}/>
        }
      </div>
    </>
  );
}
export default App;