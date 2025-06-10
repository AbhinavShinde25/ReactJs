import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)
    if(!user) return(<div>Plese Login</div>)

    return (
        <div>
            welcome {user}
        </div>
    )
}

export default Profile
