import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../Context/Context'

const Main = () => {

  const { onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini 2.0</p>
        <img src={assets.user_icon}></img>
      </div>
      <div className='main-container'>

      {!showResult
      ?<>
        <div className='greet'>
          <p><span>Greetings !</span></p>
          <p>How you doing today?</p>
        </div>
        <div className='cards'>
          <div className='card'>
            <p>Suggest some beautiful places to visit</p>
            <img src={assets.compass_icon}></img>
          </div>
          <div className='card'>
            <p>Enhance the luminosity of your ideas.</p>
            <img src={assets.bulb_icon}></img>
          </div>
          <div className='card'>
            <p>Suggest some beautiful places to visit.</p>
            <img src={assets.message_icon}></img>
          </div>
          <div className='card'>
            <p>Test your programming knowledge</p>
            <img src={assets.code_icon}></img>
          </div>
        </div>
      </>
      :<div className='result'>
          <div className='result-title'>
            <img src={assets.user_icon}></img>
            <p>{recentPrompt}</p>
          </div>
          <div className='result-data'>
            <img src={assets.gemini_icon}></img>
            {loading
            ?<div className='loader'>
            <hr/>
            
            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
      </div>

      }
        
        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Message Gemini 2.0'></input>
            <div>
              <img src={assets.gallery_icon}></img>
              <img src={assets.mic_icon}></img>
              {input?<img onClick={()=>onSent()} src={assets.send_icon}></img>:null}
            </div>
          </div>
          <p className='info'>Gemini 2.0 can make mistakes. Consider checking important information.</p>
        </div>        
      </div>
    </div>
  )
}

export default Main