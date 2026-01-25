
import React, { useState } from 'react';
import './Signin.css';

import { useNavigate } from 'react-router-dom';

interface Props {
     email: string;
     name: string;
     phone: string;
     password: string;
}

interface Errors {
     email?: string;
     name?: string;
     phone?: string;
     password?: string;
}

const Register: React.FC = () => {
     const navigate = useNavigate();

     const [data, setData] = useState<Props>({
          email: "",
          name: "",
          phone: "",
          password: ""
     });

     const [formErrors, setFormErrors] = useState<Errors>({});

     const validate = (values: Props): Errors => {
          const errors: Errors = {};
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const phoneRegex = /^\+?[1-9][0-9]{9}$/;

          if (!values.name) {
               errors.name = "Name is required";
          }

          if (!values.email) {
               errors.email = "Email is required";
          } else if (!emailRegex.test(values.email)) {
               errors.email = "Invalid email format";
          }

          if (!values.phone) {
               errors.phone = "Phone number is required";
          } else if (!phoneRegex.test(values.phone)) {
               errors.phone = "Invalid phone number";
          }

          if (!values.password) {
               errors.password = "Password is required";
          } else if (values.password.length < 4) {
               errors.password = "Password must be at least 4 characters";
          } else if (values.password.length > 10) {
               errors.password = "Password must not exceed 10 characters";
          }

          return errors;
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setData(prev => ({ ...prev, [name]: value }));
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          const errors = validate(data);
          setFormErrors(errors);

          const hasErrors = Object.values(errors).some(elmnt => elmnt !== "");//check if atleast one element satisfies condition
          if (hasErrors) return;

          // try {
          //      await axios.post("http://localhost:8000/users", data);
          //      alert("Registration successful!");
          //      navigate("/signin");
          // } catch (err) {
          //      console.error(err);
          // }
          const users = JSON.parse(localStorage.getItem("users") || "[]") as Props[];
          const emailPresant = users.some((user) => user.email == data.email);

          if (emailPresant) {
               setFormErrors({ email: "Mail already Exists" })
          
          } else {

               const addUser = [...users, data];
               localStorage.setItem("users", JSON.stringify(addUser))
               alert("Registration successful!");
               navigate("/signin");
          }
     };

     return (
          <div className='outer'>
               <form className='form' onSubmit={handleSubmit}>

                    <input
                         className='input-field' type='text' name='email' value={data.email} onChange={handleChange}
                         placeholder='Email' />

                    <p>{formErrors.email}</p>

                    <input
                         className='input-field' type='text' name='name' value={data.name} onChange={handleChange} placeholder='Name' />
                    <p>{formErrors.name}</p>

                    <input
                         className='input-field' type='text' name='phone' value={data.phone} onChange={handleChange} placeholder='Phone Number' />

                    <p>{formErrors.phone}</p>

                    <input
                         className='input-field' type='password' name='password' value={data.password} onChange={handleChange} placeholder='Password' />
                    <p>{formErrors.password}</p>

                    <button className='btn' type='submit'>Register</button>
               </form>
          </div>
     );
};

export default Register;