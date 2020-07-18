import React, { useContext } from 'react';
import UserContext from "./UserContext";
import ProfileForm from './ProfileForm';
import JoblyApi from './JoblyApi'

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    async function updateUser(data) {
        let user = await JoblyApi.updateCurrentUser(currentUser.username, data);
        setCurrentUser(user);
    }
    return (
        <div>
            <ProfileForm updateUser={updateUser} />
        </div>
    )
};
export default Profile;