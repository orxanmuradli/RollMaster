import sushi from '../../../../assets/sushi.png';
import noodle from '../../../../assets/noodle.png';
import spring from '../../../../assets/spring.png';
import "./Popular.css"


const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-tittle">
       
       <h1>POPULAR</h1>
       <div className="cards">
        <div className='cart'>
        <img src={sushi} alt="" />
        <h2>Nobel Set</h2>
        <p>DÜYÜ, NORİ, XİYAR </p>
        <span>32 AZN</span>
        </div>
       <div className='cart'>
       <img src={noodle} alt="" />
       <h2>Seafood Noodle</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       <div className='cart'>
       <img src={spring} alt="" />
       <h2>Spring Roll Salmon</h2>
       <p>DÜYÜ, NORİ, XİYAR </p>
       <span>32 AZN</span>
       </div>
       
       </div>
      </div>
    </div>
  )
}

export default Popular

