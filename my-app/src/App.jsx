import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="box">
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
