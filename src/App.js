// import './App.css';
import './assets/css/theme.css';
import './assets/css/home.css';
import Header from './components/header/header';
import Announcement from './components/announcement/announcement';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="PageContainer">
      <Announcement />
      Test
      <Header />
      <Footer />
    </div>
  );
}

export default App;
