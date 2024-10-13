import './App.css';
import DataBinding from './components/dataBinding/DataBinding';
import DataBindingRFC from './components/dataBinding/DataBindingRFC';

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
      <DataBinding />
      <hr />
      <DataBindingRFC />
    </div>
  );
}

export default App;
