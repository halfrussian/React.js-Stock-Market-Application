import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components';



const LoginButton = () => {
     
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (


    !isAuthenticated && (
    <Wrapper>
    <div>
      <button onClick={()=> loginWithRedirect()} className='btn text-white'>
        Login
      </button>
    </div>
    </Wrapper>
    )
  )
}

const Wrapper = styled.div`
.btn{
  padding: 0;
  font-size: 17px ;
}

`
export default LoginButton
