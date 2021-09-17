 import React from 'react'
 import classes from'./LoginPage.module.css';
 import { Formik, Field, Form } from "formik";

const LoginForm = (props) => {

    return <div>
        <div  className={classes.loginForm}>
     <h1>Login testing page fix soon</h1>
     
     <Formik>
           <Form>
               <div>
                   <input placeholder={"Login"} />
               </div>
               <div>
               <input placeholder={"Password"} />
               </div>
               <div>
               <input type={"checkbox"} /> remember me
               </div>
               <div>
               <button>Login</button>
               </div>
           </Form>
           </Formik>
           </div>
        <div className={classes.friend}>
        <img src='http://cdn.mos.cms.futurecdn.net/5cF7irCA4hbkkLv5FxiQoH.jpg'  alt='' width ='600'/>
        </div>
        
           </div>
}

/* const [values, setValues] = React.useState({});
 
 const handleChange = event => {
   setValues(prevValues => ({
     ...prevValues,
     // we use the name to tell Formik which key of `values` to update
     [event.target.name]: event.target.value
   }));
 } */

const Login = (props) => {

    return <div>
          <LoginForm />
           </div>
}
export default Login;
