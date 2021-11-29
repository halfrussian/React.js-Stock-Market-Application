import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components';

const Profile = () => {

  const { user, isAuthenticated} = useAuth0();

  return (
    
    isAuthenticated && (

    
    <Wrapper>
    <img src={user.picture} alt={user.name}  className='profile-img'/>
    <h2>Hello {user.name}</h2>
      
    </Wrapper>
    ) 
  )
}


const Wrapper = styled.div`

.profile-img {

}
`

export default Profile 


