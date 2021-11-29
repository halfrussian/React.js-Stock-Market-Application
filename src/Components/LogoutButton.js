import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';


const LogoutButton = () => {

  const { logout, isAuthenticated} = useAuth0();
  
  return (
    isAuthenticated && (
    <Wrapper>
    <div>
      <button onClick={()=> logout()} className='btn text-white'>
        Logout
      </button>
    </div>
    </Wrapper>
    )
  )
}

const Wrapper = styled.div`
.btn{
  padding: 0px;
  font-size: 17px ;
}

`
export default LogoutButton