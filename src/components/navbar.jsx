import React, { Fragment } from 'react'
import { logo } from '../constants/logo'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'
const Navbar = () => {
  const {loggedIn, user}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logoutHandler=()=>{
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }

  return <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
    <Link to={'/'}>
        <img src={logo} alt="logo" width={100} />
    </Link>
  <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    {loggedIn ? (<Fragment>
      <p className='me-3 m-0 py-2 text-dark text-decoration-none'>{user.username}</p>
      <Link className='me-3 py-2 text-dark text-decoration-none' to={'/create-article'}>
            Create
      </Link>
      <button className='btn btn-outline-danger' onClick={logoutHandler}>Logout</button>
    </Fragment>):(
      <Fragment>
          <Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
            Login
          </Link>
          <Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
            Register
          </Link>
      </Fragment>
    )}
   
  </nav>
</div>
}

export default Navbar