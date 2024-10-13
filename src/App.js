import './App.css';
import Home from './components/baiTapChiaLayout/Home';

function App() {
  const name = 'Nhan';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue', 'yellow',];

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
