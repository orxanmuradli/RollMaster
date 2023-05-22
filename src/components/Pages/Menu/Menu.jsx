import "./menu.css"
import menu1 from '../../../assets/menu1.png';
import menu2 from '../../../assets/menu2.png';
import menu3 from '../../../assets/menu3.png';
import menu4 from '../../../assets/menu4.png';
import menu5 from '../../../assets/menu5.png';
import menu6 from '../../../assets/menu6.png';

const Menu = () => {
  return (
    <div>
        <div className="Special-menu">
      <div className="specialmenu-tittle">
       
       <h3>MENYU</h3>
       <div className="specialmenu-carts">

         <div className="specialcart-titte">
            <p>ROLLAR</p>
         </div>
        <div className='specialcart'>
        <img src={menu1} alt="" />
        <span>California Salmon</span>
        <p>DÜYÜ, NORİ, XİYAR </p>
        <price>32 AZN</price>
        </div>
       <div className='special-cart'>
    
     
        <img src={menu2} alt="" />
       <span>Oasis Roll</span>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <price>32 AZN</price>
       </div>
       <div className='special-cart'>
       <img src={menu3 } alt="" />
       <span>Philadelphia Classic</span>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <price>32 AZN</price>
       
       </div>
       <img src={menu4} alt="" />
       <span>Unagi Classic</span>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <price>32 AZN</price>
       
       </div>
       <img src={menu5} alt="" />
       <span>Tuna Classic</span>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <price>32 AZN</price>
       
      </div>
      <img src={menu6} alt="" />
      <span>Mango Fusion</span>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <price>32 AZN</price>
       
    </div>
    </div>
  )
}

export default Menu
