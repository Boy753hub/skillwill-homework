import profile from './randome-handsome-guy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={profile} className="profile" alt="profile" />
      <div className="text">
        <h1>Hello my name is luka </h1>
        <h2>Im web developer</h2>
        <p>i started learning web developing and i hope to help you with your dream</p>
        <p>skills? all of them</p>
        <button className="button">contact me</button>
      </div>
    </header>
  </div>
  
  );
}

export default App;
