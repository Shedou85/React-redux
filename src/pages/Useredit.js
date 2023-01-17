import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Useredit = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.mainUsers)
  const selectedUser = useSelector(state => state.users.selectedUser)
  
  const [currentUser, setCurrentUser] = useState(selectedUser)

  const navigate = useNavigate()

  function changeName(e) {
    setCurrentUser(prev => {
      return {
        ...prev,
        name: e.target.value
      }
    })
  };

  function changeLastname(e) {
    setCurrentUser(prev => {
      return {
        ...prev,
        lastname: e.target.value
      }
    })
  };

  function saveUser() {
    dispatch({type: 'EDIT_USER', payload: currentUser})
    navigate('/userlist')
  }

  return (
    <div className='wrapper'>
     <h1> User Edit Page Under Construction</h1> 

      <div className='user'>
        <div className='user__name'>
          <input type="text" 
          value={currentUser.name} 
          onChange={(e) => {changeName(e)}} />

        </div>
        <div className='user__lastname'>
          <input type="text" 
          value={currentUser.lastname} 
          onChange={(e) => {changeLastname(e)}} />
        </div>
        <div className='user__buttons'>
          <div className='user__btn' onClick={saveUser}>Save</div>
          <div className='user__btn' onClick={() => navigate('/')}>Cancel</div>
        </div>

        </div>
     



      
      </div>
  )
}

export default Useredit