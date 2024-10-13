import './App.css';
import HandleEvent from './components/handleEvent/HandleEvent';

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
      {/* <DataBinding />
      <hr />
      <DataBindingRFC /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
