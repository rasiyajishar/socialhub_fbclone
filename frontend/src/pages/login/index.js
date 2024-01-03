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

import { useState } from 'react';
import * as yup from 'yup';
const loginInfos = {
    email:"",
password:"",
};
function Login() {
    const navigate=useNavigate()
const[login,setLogin] = useState(loginInfos);
const{ email,password } = login;
console.log(login);
const handleLoginChange = (e) =>{
const {name,value} = e.target;
setLogin({...login,[name]:value})
}


const loginValidation = yup.object({
    email: yup.string().required('Email is required').email('must be a valid email'),
    password: yup.string().required('Password is required'),
  });




  const createacc=()=>{
    navigate('/register')
  }

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
            <br />
            <button onClick={createacc} className='createacc'>Create Account</button>
          </div>
        </div>
        {/* <div className='register'></div> */}
      </div>
    </div>
  );
}

export default Login;



