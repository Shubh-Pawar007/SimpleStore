import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/login")
    }

    const handleSignUp = () => {
        navigate("/signup")
    }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} pl={8} pr={8} bg={"lightgreen"} >
        <img width={"280px"} style={{margin:"20px",cursor:"pointer"}} src={require("../Utils/images/logo.png")}  alt=""/>
				<Box width={200} display="flex" justifyContent="space-around">
					<Button onClick={handleSignIn} colorScheme="red">Sign-In</Button>
					<Button onClick={handleSignUp} colorScheme="red">Sign-Up</Button>
				</Box>
	</Box>
  )
}

export default Navbar