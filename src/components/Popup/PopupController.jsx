import React, { useEffect, useState } from 'react'
import PopupView from './PopupView'
import axios from 'axios'

const PopupController = ({setShowPopup , userName}) => {
const [userPost,setUserPost] = useState('');
useEffect(() => {
    axios.get(`http://localhost:3001/posts?user=${userName}`)
    .then((res) => {
        setUserPost(res.data)
    })
},[])

  return (
    <div>
      <PopupView userPost={userPost} userName={userName} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default PopupController
