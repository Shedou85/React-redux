import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserAction } from '../store/usersReducer'

const UserList = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.mainUsers)


  const usersList = users.map(user => {
    return ( 
      <div key={user.id} className='user'  data-id={user.id}>
        <div className='user__name'>{user.name}</div>
        <div className='user__lastname'>{user.lastname}</div>
        <div className='user__buttons'>
          <div className='user__btn' onClick={() => {editUser(user)}}>Edit</div>
          <div className='user__btn' onClick={() => dispatch({type: 'DELETE_USER', payload: user.id})}>Delete</div>
        </div>
      </div>
    )
  })

  function editUser(user) {
    dispatch({type: 'SELECT_USER', payload: user})
    navigate('/edituser')
  }
  

  return (
    <div className='wrapper'>
      <div className='users'>
        {usersList}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default UserList