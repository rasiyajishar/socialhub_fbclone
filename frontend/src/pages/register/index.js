import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CircleLoader from "react-spinners/CircleLoader";
import "./style.css";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Register() {
const navigate = useNavigate();
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    byear: new Date().getFullYear(),
    bmonth: new Date().getMonth() + 1,
    bday: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    byear,
    bmonth,
    bday,
    gender,
  } = user;

  const yeartemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const years = Array.from(new Array(100), (val, index) => yeartemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(byear, bmonth, 0).getDate();
  };
  // console.log(getDays);

  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  //console.log(user);

  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("what's your firstname ?")
      .min(2, "firstname must be between 2 and 16 characters.")
      .max(10, "firstname must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and specialcharacters are not allowed"),

    last_name: Yup.string()
      .required("what's your lastname ?")
      .min(2, "lastname must be between 2 and 16 characters.")
      .max(10, "lastname must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and specialcharacters are not allowed"),

    email: Yup.string()
      .required(
        "you will need this when you log in and if you ever need to reset your password. "
      )
      .email("enter a valid email address."),
    password: Yup.string()
      .required(
        "enter a combination of six numbers,letters and punctuation marks."
      )
      .min(6, "password must be atleast 6 characters.")
      .max(16, "password can't be more than 16 characters"),
  });
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("false");
 const dispatch = useDispatch()
  const registerSubmit = async (formValues) => {
    try {
      setLoading(true); // Set loading to true before making the API request
  
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        {
          // first_name,
          // last_name,
          // email,
          // password,
          // byear,
          // bmonth,
          // bday,
          // gender,
          ...formValues,
        }
      );
  
      setError("");
      setSuccess(data.message);
      const{message,...rest}=data;
      setTimeout(()=>{
        dispatch({type:"LOGIN",payload:rest})
        navigate("/");
    },2000)
    } catch (error) {
      setSuccess("");
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="register">
      <div className="register_header">
        <span>Sign Up</span>
      </div>
      <div className="registerform">
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            byear,
            bmonth,
            bday,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={(values) => {
            let current_date = new Date();
            let picked_date = new Date(values.byear,values.bmonth - 1, values.bday);
            let atleast14 = new Date(1970 + 14, 0, 1);

            let nomorethan70 = new Date(1970 + 70, 0, 1);
            if (current_date - picked_date < atleast14) {
              setDateError(
                "it looks like you are enrered a wrong date of birth"
              );
            } else if (current_date - picked_date > nomorethan70) {
              setDateError(
                "it looks like you are enrered a wrong date of birth"
              );
            } else if (values.gender === "") {
              setGenderError("pls choose a gender");
            } else {
              setDateError("");
              setGenderError("");
              registerSubmit(values);
            }
          }}
        >
          {(formik) => (
            <Form>
              <div className="input-group">
                <Field
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="input-field"
                  onChange={handleRegisterChange}
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-group">
                <Field
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="input-field"
                  onChange={handleRegisterChange}
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-group">
                <Field
                  type="text"
                  name="email"
                  placeholder="Mobile Number or Email Address"
                  className="input-field"
                  onChange={handleRegisterChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="New Password"
                  className="input-field"
                  onChange={handleRegisterChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">Birth Day</div>
                <div className="reg_grid">
                  <Field
                    as="select"
                    name="byear"
                    value={byear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    ))}
                  </Field>

                  <Field
                    as="select"
                    name="bmonth"
                    value={bmonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((month, index) => (
                      <option value={month} key={index}>
                        {month}
                      </option>
                    ))}
                  </Field>

                  <Field
                    as="select"
                    name="bday"
                    value={bday}
                    onChange={handleRegisterChange}
                  >
                    {days.map((day, index) => (
                      <option value={day} key={index}>
                        {day}
                      </option>
                    ))}
                  </Field>
                  {dateError}
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">Gender</div>
                <div className="reg_grid2">
                  <label htmlFor="male">Male</label>
                  <Field
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleRegisterChange}
                  />
                  <label htmlFor="female">Female</label>
                  <Field
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleRegisterChange}
                  />
                  <label htmlFor="custom">Custom</label>
                  <Field
                    type="radio"
                    name="gender"
                    id="custom"
                    value="custom"
                    onChange={handleRegisterChange}
                  />
                  {genderError}
                </div>
              </div>
              <br />
              <button type="submit" className="submit-button">
                Sign Up
              </button>
              <CircleLoader color="#1876f2" loading={loading} size={30} />
              {error}
              {success}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
