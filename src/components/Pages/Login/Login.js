import "../Login/Login.css"
import { ErrorMessage, Formik, Form, Field } from "formik";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hr from '../../Assets/hr.png';
import Sourcecode from '../../Assets/Sourcecode.png';
import Mega from '../../Assets/mega.png';
import Button from '../../Button/Button';
import Image from '../../Image/Image';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here

    // Assuming login is successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="body">
    <div className="left-login">
    <Image src={Hr} alt="background" className="chart" />
      <h2>
    <span class="black-text">The Ultimate</span> 
    <span class="green-text">HR Management Solution</span>
    </h2>
      <div class="centered-text">
    <p>At SourceCode, we have a reliable, secure and adaptable HR management built from the ground up. We are determined to help our employees give their best efforts every day to achieve the goals of their job.</p>
    </div> 
    </div>
  
    <div className="right-login">
      <div className="card-login">
        <div className="user-links">
  
          <div className="sourcecode">
          <Image src={Sourcecode} alt="code"  />
          </div>
        </div>
        <h4>Log in to start your session</h4>
        <div className="main-container">
        <Formik
          initialValues={{ email: '', password: '' }}>
          <Form className="login-form">
            <div className="form-group">
              <Field name="email" type="email" className="form-field" placeholder="Employee Code" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
  
            {/* Another field */}
  
            <div className="form-group">
              <Field name="password" type="password" className="form-field" placeholder="Password" />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
  
            <Button type="submit" onClick={handleLogin}>
            LOGIN
           </Button>
          </Form>
        </Formik>
        </div>
        <div className="mega">
        <Image src={Mega} alt="mega"  />
          <h6>© 2024 MegaHCM. All Rights Reserved</h6>
          </div>
       
      </div>
    </div>
    <ToastContainer position="top-right" />
  </div>
  
  );
}

export default Login;