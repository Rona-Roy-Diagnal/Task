import React, { useEffect, useState } from 'react'
import './Signin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface props{
    email:string;
    name:string;
    phone:string;
    password:string;
}
interface errors{
    email?:string;
    name?:string;
    phone?:string;
    password?:string;
}
const Register= () => {
     const navigate=useNavigate();
   const [data,setData]= useState<props>({
    email:"",
    name:"",
    phone:"",
    password:""
   })
   const [formErrors,setFormErrors]=useState<errors>({})
   const [isSubmit,setIsSubmit]=useState(false)
   const handleSubmit=async(e:React.FormEvent)=>{
   e.preventDefault();
   
    await axios.post('http://localhost:8000/users',data).then(res=>console.log(res))
   setData({ email:"",
    name:"",
    phone:"",
    password:""})
    
    setFormErrors(validate(data))
     setIsSubmit(true);
     //navigate('/signin')
     
}
useEffect(()=>{
     console.log(formErrors)
     if(Object.keys(formErrors).length==0&&isSubmit){
          console.log(data);
     }
},[formErrors])
const validate=(values:errors)=>{
     const errors={
          email:"",
          name:"",
          phone:"",
          password:""

     };
     const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
     const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
     if(!values.name){
          errors.name="Name is required"
     }
     if(!values.email){
          errors.email="Email is required"
     }else if(!regex.test(values.email)){
          errors.email="Not a valid mail"
     }
     if(!values.phone){
          errors.phone="Phone is required"
     }else if(!validatePhoneNumberRegex.test(values.phone)){
          errors.phone="Phone number not valid"
     }
     if(!values.password){
          errors.password="Password is required"
     }else if(values.password.length<4){
          errors.password="Password should be more than 4 character"
     }
     else if(values.password.length>10){
          errors.password="Password should not be more than 10 characters"
     }
     return errors;
}


   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setData((prev)=>({...prev,[name]:value}))
   }
  return (
  
     <div className='outer'>
        <form className='form' onSubmit={handleSubmit}>
          
            <label className='form-label' htmlFor='email'> Email  </label>
                 <input className='input-field'type='text' name='email' value={data.email} onChange={handleChange}></input>
                 
                 
                 <p>{formErrors.email}</p>
            <label className='form-label'htmlFor='name'> Name </label>
                 <input className='input-field' type='text' name='name' value={data.name} onChange={handleChange}></input>
             
             <p>{formErrors.name}</p>
            <label className='form-label'htmlFor='phone'> Ph Number  </label>
                 <input className='input-field'type='text' name='phone' value={data.phone} onChange={handleChange}></input>
            
             <p>{formErrors.phone}</p>
            <label className='form-label'htmlFor='password'> Password  </label>
                 <input className='input-field'type='text' name='password' value={data.password} onChange={handleChange}></input>
            <p>{formErrors.password}</p>
           <button className='btn'type='submit'>Register</button>
        </form>
        </div>
    
  )
}

export default Register