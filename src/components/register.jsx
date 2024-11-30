import React, { useEffect, useState } from 'react'
import { logo } from '../constants/logo'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import {signUserFailure, signUserStart, signUserSuccses } from '../slice/auth'
import AuthService from '../service/auth'
import {ValidationError} from './index'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const dispatch=useDispatch()
    const {isLoading, loggedIn}=useSelector(state=>state.auth)
    const navigate=useNavigate()
    const registerHandler=async(e)=>{
      e.preventDefault()
      dispatch(signUserStart())
      const user={username:name, email, password}
      try {
        const response = await AuthService.userRegister(user)
        dispatch(signUserSuccses(response.user))
        navigate('/')
      } catch (error) {
        dispatch(signUserFailure(error.response.data.errors))
      }
    }

    useEffect(()=>{
      if(loggedIn){
        navigate('/')
      }
    }, [loggedIn])
  return (
    <div className='text-center'>
    <main className='form-signin w-25 m-auto mt-5'>
    <form>
    <img class="mb-4" src={logo} alt="logo" width="100" height="60"/>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <ValidationError/>
    <Input label={'Username'} state={name} setState={setName}/>
    <Input label={'Email address'} state={email} setState={setEmail}/>
    <Input label={'Password'} type='password' state={password} setState={setPassword}/>
    <button class="w-100 btn btn-lg btn-primary mt-4" type="submit" disabled={isLoading} onClick={registerHandler}>{isLoading ? 'Loading...' :'Register'}</button>
    <p class="mt-5 mb-3 text-muted">© 2017–2024</p>
    </form>
    </main>
    </div>
  )
}

export default Register