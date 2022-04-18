import React, { Component } from 'react'
import song from '../assets/mutant.mp3'
import {  FaPlayCircle } from "react-icons/fa";
import {  FaPauseCircle } from "react-icons/fa";


class App extends Component {
  
 
  state = {
   
    audio: new Audio(song),

    
    isPlaying: true,
  }

  
  playPause = () => {
    
    let isPlaying = this.state.isPlaying 
    if (isPlaying) { 
      this.state.audio.pause()
    } else { 
      this.state.audio.play()
    } 
    this.setState({ isPlaying: !isPlaying })
  }
 
  render() {
    return (
      <div>
       
        <p></p>


       

         <div className="pr-3 pb-3" style={{ bottom: 0, right: 0, position: 'fixed' }}>
         <button onClick={this.playPause}  className="text-2xl rounded-full bg-purple-200 p-3" title='play sound'>
         {this.state.isPlaying ?
           <FaPauseCircle  />
         : 
         <FaPlayCircle />}
         </button>
       </div>
      </div>
    )
  }
}

export default App
