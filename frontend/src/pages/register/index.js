import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css';

function Register() {
  const userInfos = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    byear: new Date().getFullYear(),
    bmonth: new Date().getMonth() + 1,
    bday: new Date().getDate(),
    gender: '',
  };

  const [user, setUser] = useState(userInfos);
  const { first_name, last_name, email, password, byear, bmonth, bday, gender } = user;

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const years = Array.from(new Array(100), (val, index) => byear - index);

  return (
    <div className='register'>
      <div className='register_header'>
        <span>Sign Up</span>
      </div>
      <div className='registerform'>
        <Formik>
          {(formik) => (
            <Form>
              <div className='input-group'>
                <Field
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  className='input-field'
                  onChange={handleRegisterChange}
                />
                <ErrorMessage name='first_name' component='div' className='error-message' />
              </div>
              <div className='input-group'>
                <Field
                  type='text'
                  name='last_name'
                  placeholder='Last Name'
                  className='input-field'
                  onChange={handleRegisterChange}
                />
                <ErrorMessage name='last_name' component='div' className='error-message' />
              </div>
              <div className='input-group'>
                <Field
                  type='text'
                  name='email'
                  placeholder='Mobile Number or Email Address'
                  className='input-field'
                  onChange={handleRegisterChange}
                />
                <ErrorMessage name='email' component='div' className='error-message' />
              </div>
              <div className='input-group'>
                <Field
                  type='password'
                  name='password'
                  placeholder='New Password'
                  className='input-field'
                  onChange={handleRegisterChange}
                />
                <ErrorMessage name='password' component='div' className='error-message' />
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>Birth Day</div>
                <div className='reg_grid'>
                  <Field as='select' name='byear' value={byear}>
                    {years.map((year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    ))}
                  </Field>
                  <Field as='select' name='bmonth' value={bmonth}>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option value={index + 1} key={index}>
                        {index + 1}
                      </option>
                    ))}
                  </Field>
                  <Field as='select' name='bday' value={bday}>
                    {Array.from({ length: 31 }, (_, index) => (
                      <option value={index + 1} key={index}>
                        {index + 1}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              <div className='reg_col'>
                <div className='reg_line_header'>Gender</div>
                <div className='reg_grid2'>
                  <label htmlFor='male'>Male</label>
                  <Field
                    type='radio'
                    name='gender'
                    id='male'
                    value='male'
                    onChange={handleRegisterChange}
                  />
                  <label htmlFor='female'>Female</label>
                  <Field
                    type='radio'
                    name='gender'
                    id='female'
                    value='female'
                    onChange={handleRegisterChange}
                  />
                  <label htmlFor='custom'>Custom</label>
                  <Field
                    type='radio'
                    name='gender'
                    id='custom'
                    value='custom'
                    onChange={handleRegisterChange}
                  />
                </div>
              </div>
              <br />
              <button type='submit' className='submit-button'>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
