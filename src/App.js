import './App.css';
import StateDemo from './components/state/StateDemo';

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
      {/* <HandleEvent /> */}
      {/* <RenderingCondition /> */}
      <StateDemo />
    </div>
  );
}

export default App;
