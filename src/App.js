import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/CheckOut/CheckOut';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
 <Header></Header>
      <Routes>


        <Route path='/' element={ <HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkOut' element={<CheckOut></CheckOut>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
  
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
