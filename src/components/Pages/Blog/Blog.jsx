import blog from '../../../assets/blogs.png';
import blogs2 from '../../../assets/blogs2.png';
import blogs3 from '../../../assets/blogs3.png';
import "./Blog.css"


const Blog = () => {
  return (
    
    <div className="blog">
    <div className="blog-tittle">
     
     <h1>BLOQ</h1>
     <div className="styles">
      <div className='style'>
      <img src={blog} alt="" />
      <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
      
      
      </div>
     <div className='style'>
     <img src={blogs2} alt="" />
     
     <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
     
     </div>
     <div className='style'>
     <img src={blogs3} alt="" />
     <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
     
     </div>
     
     </div>
    </div>
  </div>

      
    
  )
}

export default Blog
