import React, { useContext } from 'react';
import SignupForm from './SignupForm';
import JoblyApi from './JoblyApi';
import UserContext from "./UserContext";

function Signup() {
  const { setCurrentUser } = useContext(UserContext);
  async function createUser(data) {
    let user = await JoblyApi.createNewUser(data);
    setCurrentUser(user);
  }
  return (
  <>
  <SignupForm createUser={createUser}/>
  </>
  );
}

export default Signup;