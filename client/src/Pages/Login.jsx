import React from 'react';
import {Container, Paper, TextField, Typography,Button,Stack, Avatar, IconButton} from '@mui/material';
import {CameraAlt}from '@mui/icons-material';
import { useState,useEffect } from 'react';
import { VisuallyHiddenInput } from '../Components/styles';
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import { usernamevalidator } from '../Utils/Validators';
import { fontGrid } from '@mui/material/styles/cssUtils';

const Login = () => {
  const [isLogin,setIsLogin] = useState(true);

const ToggleLogin = () => setIsLogin((prev) => !prev);

const name = useInputValidation("")
const bio = useInputValidation("")
const username = useInputValidation("",usernamevalidator)
const password = useStrongPassword()
// const Avatar = useFileHandler("single")
const avatarHandler = useFileHandler("single");
const handleLogin=(e)=>{
  e.preventDefault();
}
const handleSignUP=(e)=>{
  e.preventDefault();
}



  return (
    <div 
      style={{
        backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(150,67,169,0.43))",

      }}
    >
    <Container component={"main"} maxWidth="xs" sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>
      <Paper 
      elevation={3} 
      sx={{
        padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      }}
      >
      {
        isLogin ? 
        <>
        <Typography variant='h5'>LOGIN</Typography>
        <form style={{
        width:"100%",
        marginTop:"0.5rem"}}
        onSubmit={handleLogin}
        >
             <TextField required fullWidth label="Username" margin='normal' variant='outlined'></TextField>
             <TextField required fullWidth label="Password" margin='normal' variant='outlined'type='password'></TextField>
             <Button sx= {{
             marginTop:"0.5rem",
             }}variant='contained'fullWidth color='secondary' type='submit'>Login</Button>

             <Typography display={"flex"} flexDirection={"column"}alignItems={"center"} marginTop={"0.5rem"}>or </Typography>
              <Button sx={{
                marginTop:"0.5rem",
              }}
                fullWidth
                color="secondary"
                variant="text"
                onClick={ToggleLogin}
                >
                Register
              </Button>
        </form>
        </>: <>
        <Typography variant='h5'>REGISTER</Typography>
        <form style={{
        width:"100%",
        marginTop:"0.5rem"}}
        onSubmit={handleSignUP}
        >
        <Stack position={"relative"}
         width={"10rem"}
         margin={"auto"}
         >
        <Avatar sx={{
          width:"10rem",
          height:"10rem",
          objectFit:"contain"
        }}
        src={avatarHandler.preview}
        />  
          <IconButton
          sx={{
            position:"absolute",
            bottom:"0",
            right:"0",
            bgcolor:"rgba(255,255,255,0.9)",
            ":hover":{bgcolor:"rgba(255,255,255,0.055)"},
          }}
          component="label"
          >
             <>
             <CameraAlt/>
             <VisuallyHiddenInput type="file" onChange={avatarHandler.changeHandler}/>
             </>
          </IconButton>      
        </Stack>
        {
              Avatar.error&&(
                <Typography 
                m={"1.2rem"}
                color="error" 
                variant="caption"
                width={"fit-content"}
                display={"block"}
                >
                  {Avatar.error}
                </Typography>
              )
             }


           <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler}></TextField>
             <TextField required fullWidth label="Username" margin='normal' variant='outlined'value={username.value} onChange={username.changeHandler}></TextField>
             {
              username.error&&(
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )
             }
             <TextField required fullWidth label="Bio" margin='normal' variant='outlined'value={bio.value} onChange={bio.changeHandler}></TextField>
             <TextField required fullWidth label="Password" margin='normal' variant='outlined'type='password' value={password.value} onChange={password.changeHandler}/>
             {
              password.error&&(
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )
             }
             <Button sx= {{
             marginTop:"0.5rem",
             }}variant='contained'fullWidth color='secondary' type='submit'>Register Me</Button>

             <Typography display={"flex"} flexDirection={"column"}alignItems={"center"} marginTop={"0.5rem"}>or </Typography>
              <Button sx={{
                marginTop:"0.5rem",
              }}
                fullWidth
                color="secondary"
                variant="text"
                onClick={ToggleLogin}
                >
                LogIn
              </Button>
        </form>
        </>
      }



      </Paper>
    </Container>
    </div>
  )
}

export default Login