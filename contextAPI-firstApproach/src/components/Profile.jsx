import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h1>Profile</h1>
            {(!user) ? <div>Please Enter UserName</div> : <div><p>userName: {user.username}</p>
                <p>Password: {user.password}</p></div>}
        </div>
    )
}

export default Profile