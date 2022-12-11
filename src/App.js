import './App.css';
const arrayKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];

function App() {
  return (
    <div className="app">
      <span className="screen">Calling...</span>
      <main className="telf">
        <div className="keyboard" >
           {arrayKeys.forEach(key => {
            <button>{key}</button>
           })}
        </div>


      </main>
    </div>
  );
}

export default App;
