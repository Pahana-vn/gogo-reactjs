import './App.css';
import BaiTapAdvance from './components/baiTapThucThanhLayoutAdvance/BaiTapAdvance';

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
      <BaiTapAdvance />
    </div>
  );
}

export default App;
