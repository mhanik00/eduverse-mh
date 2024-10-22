import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/images/video.mp4'
function VideoPlayer({playState,setPlayState}) {
    const player =useRef(null)
    const closePlayer=(e)=>{
       if (e.target === player.current){
         setPlayState(false)
       }
    }
  return (
    <div 
    ref={player}
    onClick={closePlayer}
    className={`video-player ${playState?'':'hide'}`}>
    <video
    src={video}
    autoPlay
    muted
    controls
    >

    </video>
    </div>
  )
}

export default VideoPlayer