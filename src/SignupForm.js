import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button
} from "reactstrap";

// use this form to add a drink/snack to db and state
const SignupForm = ({ createUser }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    // do something with the data submitted
    createUser(formData)
    
    setFormData({
      first_name: "",
      last_name: "",
      username: "",
      password:""
    });
  };
  
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: ""
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
      <label htmlFor="first_name">First Name:</label>
      <input
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      </p>
      <p>
      <label htmlFor="last_name">Last Name:</label>
      <input
        id="last_name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      </p>
      <p>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        value={formData.email}
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

export default SignupForm;
