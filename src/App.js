import './App.css';
import FaqSection from './components/FaqSection';
import MainSection from './components/MainSection';
import MyNavbar from './components/MyNavbar';
import NavigationLinks from './components/NavigationLinks';

function App() {
  return (
    <div >
      
       <div >
        <MyNavbar />
        <NavigationLinks />
        <MainSection/>
        <FaqSection/>
      </div>

    </div>
  );
}

export default App;
