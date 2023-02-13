import logo from './logo.svg';
// import './App.css';
import './css/theme.css';
import Header from './components/header/header';
import Announcement from './components/announcement/announcement';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="PageContainer">
      <Announcement />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
