import logo from './logo.svg';
// import './App.css';
import './css/theme.css';
import Header from './components/header/header';
import Announcement from './components/announcement/announcement';

function App() {
  return (
    <div className="PageContainer">
      <Announcement />
      <Header />
    </div>
  );
}

export default App;
