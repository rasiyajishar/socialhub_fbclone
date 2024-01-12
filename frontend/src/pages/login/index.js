// import React from 'react';
// import "./style.css";
// import { Formik, Form, Field } from 'formik';

// import { Link } from 'react-router-dom';

// function Login() {
//   return (
//     <div className='login'>
//       <div className='login_wrapper'>
//         <div className='login_wrap'>
//           <div className='login1'>
//             SocialHub
//             <br></br>
//             <span>
//               We don't just share posts, we share experiences. Engaging more,
//               Refreshing result
//             </span>
//           </div>
//           <div className='login2'></div>
//           <div className='login2_wrap'>
//             <Formik
//               initialValues={{ username: '', password: '' }}
//               onSubmit={(values) => {
//                 // Handle form submission
//                 console.log(values);
//               }}
//             >
//               {(formik) => (
//                 <Form>
//                   <Field type='text' name='username' />
//                   <br></br>
//                   <Field type='text' name='password' />
//                   <br></br>
//                   <button type='submit'>Log In</button>
//                 </Form>
//               )}
//             </Formik>
//             <Link to='/forgot'>forgotten password ?</Link>
//             <br></br>
//             <button className='createacc'>Create Account</button>
//           </div>
//         </div>
//         <div className='register'></div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import './style.css';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import * as yup from 'yup';
const loginInfos = {
    email:"",
password:"",
};
function Login() {


    const navigate=useNavigate()
    const dispatch = useDispatch()
const[login,setLogin] = useState(loginInfos);
const{ email,password } = login;
console.log(login);


const handleLoginChange = (e) =>{
const {name,value} = e.target;
setLogin({...login,[name]:value})
}

const googleAuth = ()=>{
  window.open(
    `${process.env.REACT_APP_BACKEND_URL}`,"_self"
  )
}

const loginValidation = yup.object({
    email: yup.string().required('Email is required').email('must be a valid email'),
    password: yup.string().required('Password is required'),
  });




  const createacc=()=>{
    navigate('/register')
  }

const[error,setError] = useState("");

const[loading,setLoading] = useState(false)





const loginSubmit = async () => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, { email, password });

    if (response.data) {
      const { message, ...rest } = response.data;
      dispatch({ type: "LOGIN", payload: rest });
      navigate("/");
    } else {
      // Handle the case where response.data is undefined or not in the expected format
      console.error("Unexpected response format:", response);
    }
  } catch (error) {
    setLoading(false);
    setError(error.response.data.message);
  }
};


// const loginSubmit = async()=>{
//   try {
//    const {data} =await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`,{email,password
  
//   })
//   const {message,...rest} = data;
//   dispatch({type:"LOGIN",payload:rest})
//   navigate("/");
//   } catch (error) {
//     setLoading(false);
//     setError(error.response.data.message);
//   }
// }

  return (
    <div className='login'>
      <div className='login_wrapper'>
        <div className='login_wrap'>
          <div className='login1'>
            SocialHub
            <br />
            <span>
              We don't just share posts, we share experiences. Engaging more,
              Refreshing result
            </span>
          </div>
          <div className='login2'></div>
          <div className='login2_wrap'>
            <Formik
            enableReinitialize
              initialValues={{ email, password }}
             validationSchema={loginValidation}
             onSubmit={()=>{
              loginSubmit()
             }}
            >
              {(formik) => (
                <Form>
                  <Field
                    type='text'
                    name='email'
                    placeholder='email address'
                    className='input-field'
                    onChange={handleLoginChange}
                  />
                  <ErrorMessage name='email' component='div' className='error-message' />
                  <br />
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='input-field'
                    onChange={handleLoginChange}
                  />
                  <ErrorMessage name='password' component='div' className='error-message' />
                  <br />
                  <button type='submit' className='submit-button'>
                    Log In
                  </button>
                </Form>
              )}
            </Formik>
            <Link to='/forgot' className='forgot-link'>
              Forgotten password?
            </Link>
            {error}
            <br />
            <button onClick={createacc} className='createacc'>Create Account</button>
          </div>
        </div>
        <button className='googlebtn' onClick={googleAuth}><span>Sign in with google</span></button>
       
      </div>
    </div>
  );
}

export default Login;



