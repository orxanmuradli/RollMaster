import './App.css'
import Header from './components/Header/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
// import Popular from './components/Pages/Home/Popular/Popular';
import Blog from './components/Pages/Blog/Blog';

import Footer from './components/Footer/Footer';
// import Menu from './components/Pages/Menu/Menu';
// import Menu from './components/Pages/Menu/Menu';
function App() {
return <div className='App'>
  <Router>
  <Header/>

  <Routes>
    <Route path='/' exact Component={Home}/>
  </Routes>
 {/* <Popular/> */}
  
  <Blog/>
  <Footer/>
  </Router>
</div>
}

export default App



