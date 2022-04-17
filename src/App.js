import './App.css';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
    
      <Header></Header>
      <HomePage></HomePage>
      <LoginPage></LoginPage>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
