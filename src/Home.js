import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from "./UserContext";
function Home() {
  const { currentUser } = useContext(UserContext);
    return (
        <div className="pt-5">
        <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">
              Jobly
            </h1>
            <p className="lead">All the jobs in one convenient place.</p>
            <h2>Welcome Back</h2>
            {currentUser ? "" : <Link to='/login'>Login</Link> }
        </div>
    </div>
    )
};
export default Home;