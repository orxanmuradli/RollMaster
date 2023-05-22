import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import './navbar.css'
const Header = () => {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo}  />
      </div>
      <div className='rightSide'>
     <Link to="/"></Link>
     <Link to="/MENYU">MENYU</Link>
     <Link to="/KAMPANİYALAR">KAMPANİYALAR</Link>
     <Link to="/HAQQIMIZDA">HAQQIMIZDA</Link>
     <Link to="/BLOQ">BLOQ</Link>
     <Link to="/ƏLAQƏ">ƏLAQƏ</Link>
      </div>
    </div>
  )
}

export default Header
