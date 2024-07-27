import React from 'react'
import Footer from '../components/Footer'
import '../css/Home.css'
import video1 from '../images/video3.mp4'
import video2 from '../images/video2.mp4'
import video3 from '../images/video12.mp4'
import video4 from '../images/video8.mp4'
import video5 from '../images/video10.mp4'
import video6 from '../images/video6.mp4'

const Home = () => {
  return (
    <>
      <div className='motto'>
          <div className='center'>
            <h2>Km Joghee's</h2>
            <div className='line-bg'></div>
            <q>mixing beats sipping heats,coffee powdered culture complete</q>
          </div>        
      </div>
      <div className='content'>
          <div className='con-1'> 
            <video autoPlay muted loop src={video1} alt='coffee-beans' className='beans'></video>
            <h4>Grown in The Nilgiris</h4>
          </div>
          <div className='con-2'> 
            <video autoPlay muted loop src={video2} alt='coffee-beans' className='beans-1'></video>
            <h4>Infused with a rich, earthy aroma</h4>
          </div>
          <div className='con-3'> 
            <video autoPlay muted loop src={video3} alt='coffee-beans' className='beans-2'></video>
            <h4>Hand-selected coffee grounds</h4>
          </div>
          <div className='con-4'> 
            <video autoPlay muted loop src={video4} alt='coffee-beans' className='beans-3'></video>
            <h4>Gourmet coffee blend</h4>
          </div>
          <div className='con-4'> 
            <video autoPlay muted loop src={video5} alt='coffee-beans' className='beans-4'></video>
            <h4>Artisan-crafted coffee powder</h4>
          </div>
          <div className='con-4'> 
            <video autoPlay muted loop src={video6} alt='coffee-beans' className='beans-5'></video>
            <h4>Expertly roasted grounds</h4>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
