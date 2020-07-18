import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button
} from "reactstrap";
import JoblyApi from './JoblyApi';
import {useHistory} from 'react-router-dom'

// use this form to add a drink/snack to db and state
const LoginForm = ({setToken}) => {
  const history = useHistory()

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    let userToken = {};
    async function getUser(){
      userToken = await JoblyApi.login(formData);
      console.log(userToken)
      setToken(userToken.token)
      if(userToken){
        history.push("/");
      }
    }
    getUser()
    setFormData({
      username: "testuser",
      password:"secret"
    });
  };
  
  const [formData, setFormData] = useState({
    username: "testuser",
    password: "secret"
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  // end handleChange

  return (
    <div>
    <section className="col-md-10">
    <Card>
      <CardBody>
    <form onSubmit={handleSubmit}>
      <p>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      </p>
      <p>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      </p>
      <Button color="primary">Submit</Button>
    </form>
      </CardBody>
      </Card>
    </section>
    </div>
  );
};
// end

export default LoginForm;
