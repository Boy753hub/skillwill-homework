import './App.css';
import useLocalStorage from './Hooks/useLocalStorage';
import useWindowSize from './Hooks/useWindowSize';
import Todolist from './components/todolist';

function App() {
  const [isOpen = true, toggle] = useLocalStorage('tab', true);
  const {width} = useWindowSize()


  return (
    <div>
      { width > 600 && <div className='dark'>
        <p>dark theme</p>
      <label className="switch">
        <input onChange={() => toggle((prev)=>!prev)} value={isOpen} type="checkbox" checked={isOpen} />
        <span className="slider round"></span>
      </label>
      </div>}
      { width > 600 && isOpen && <div className="background"></div>}
      <Todolist />
    </div>
  );
}

export default App;

