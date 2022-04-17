import { Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>

      <Routes></Routes>
    
      <Header></Header>
      <HomePage></HomePage>
      <LoginPage></LoginPage>
      <Register></Register>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
