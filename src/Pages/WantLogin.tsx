/* eslint-disable react-hooks/refs */
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import  { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/WantLogin.css'
const WantLogin = () => {
    const navigate=useNavigate();
    const {ref}=useFocusable();
    const loginref=useRef<HTMLButtonElement>(null);
    const cancelref=useRef<HTMLButtonElement>(null);
    const loginfocus=useFocusable({focusKey:"login_focus",onEnterPress:()=> navigate('/signin'),focusable:true,onFocus:()=>{
        loginref.current?.focus();
    }})
       const cancelfocus=useFocusable({focusKey:"cancel_focus",onEnterPress:()=> navigate('/'),focusable:true,onFocus:()=>{
        cancelref.current?.focus();
       }})
    useEffect(()=>{
        loginfocus.focusSelf();
    },[])


  return (
    <div ref={ref} className='want-div'>
         <div  className='want-btn' >
        <h1 className='want-h1'>.Flix</h1>
        <h3 className='want-h3'>Sign In To Continue</h3>
       <div ref={loginfocus.ref}>
    <button ref={loginref} className={`want ${loginfocus.focused?"focused":""}`}>Log in</button></div>
    <div ref={cancelfocus.ref} >
    <button ref={cancelref} className={`notwant ${cancelfocus.focused?"focused":""}`}>Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default WantLogin