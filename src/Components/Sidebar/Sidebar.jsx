import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets.js'
import { context } from '../../Context/Context.jsx'
const Sidebar = () => {

  const [extend,setExtend] = useState(false)
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(context)

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick={()=>setExtend(prev=>!prev)} className='menu' src={assets.menu_icon} alt=''></img>
            <div onClick={()=>newChat()} className='new-chat'>
              <img src={assets.plus_icon} alt=''></img>
              {extend?<p>New Chat</p>:null}
            </div>
            
            {extend?
            <div className='recent'>
              <p className='recent-title'>Recent</p>
              {prevPrompt.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                    <img src={assets.message_icon} alt=''></img>
                    <p>{item.slice(0,18)}...</p>
                  </div>
                )
              })}
              
            </div>
            :null}
            
        </div>
        <div className='bottom'>
          <div className='bottom-item recent-entry'>
            <img src={assets.question_icon}></img>
            {extend?<p>Help</p>:null}
          </div>
          <div className='bottom-item recent-entry'>
            <img src={assets.history_icon}></img>
            {extend?<p>Activity</p>:null}
          </div>
          <div className='bottom-item recent-entry'>
            <img src={assets.setting_icon}></img>
            {extend?<p>Settings</p>:null}
          </div>
        </div>
    </div>
  )
}

export default Sidebar