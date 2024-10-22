import React, { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Title from './components/title/Title'
import Programs from './components/programs/Programs'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

const App = () => {
  const [playState,setPlayState]=useState (false)
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='container'>
     <Title
      subTitle='Our Program ' title='What we Offer'
     />
     <Programs/>
     <About  setPlayState={setPlayState}/>
     <Title subTitle='Gallery ' title='Campus Photos'/>
     <Campus/>
     <Testimonials/>
     <Contact/>
     <Footer/>
     </div>
     <VideoPlayer 
     playState={playState}
        setPlayState={setPlayState}
      />
    </div>
  )}

export default App