import React from 'react'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
// import image from '../assets/house-7497001.png'
// import profileImg from '../assets/profileImg.jpg'
const Home = () => {
  
  return (
    <>
    
    
    <div className='Home'>
    {/* <img className='image' src='' class="img-fluid" alt="..."/> */}
    <div className='bio'>
    <h1 >
      Mujtaba Sayyed 
    </h1>
      <p >
      <div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>  "You can't stop the waves
        but you can learn to surf"
    </p>
      <footer class="blockquote-footer">  "JON KABAT-ZINN" </footer>
    </blockquote>
  </div>
</div>
      
      </p>
    </div>
    </div>
      <div>
      {/* <img className='profile-img' src={profileImg} alt="" /> */}
      </div>
      <About />
      <Contact />
      <Projects />
      <Resume />
    {/* <Footer /> */}
          </>
  )
}

export default Home
