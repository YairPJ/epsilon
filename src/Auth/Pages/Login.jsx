import React, { useMemo, useState } from 'react';
import '../styles/login.css';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { Alert,Grid, CircularProgress } from '@mui/material';
import { Navigate, useNavigate } from 'react-router';
import logoProvi from '../../../public/images/logoprovi.png'
import logoGoogle from '../../../public/images/googleLogo.png'
import { useForm } from '../../Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuth, startGoogleSingIn, startSignInEmail } from '../../store/auth/thunks';

export const Login = () => {

  const {status, errorMesaje} = useSelector(state => state.auth) //EXTRAER LOS DATOS DEL USUSARIO
  
  const formData={
    email: '',
    password: '',
  }

  const navigate=useNavigate();
  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm(formData);

  const isAuth = useMemo(()=>status==='checking',[status]);  //ES USEMEMO ES PARA MEMORIZAR SI EL USUARIO ESTA AUTENTICADO

  const onSubmit = (e) =>{
      e.preventDefault();
      dispatch(checkingAuth());
  }

  const onGoogleSubmit=()=>{
      dispatch(startGoogleSingIn());
  }

  const onSubmitWhitEmail=()=>{
    dispatch(startSignInEmail(email,password));
  }

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
      <Grid
          display={!!errorMesaje?'':'none'}
        >
          <Alert severity='error'>
            {errorMesaje}
          </Alert>
        </Grid>
        <form onSubmit={onSubmit}>
          <div className="logo-container">
            <img src={logoProvi} className="logo"/>
          </div>
          <h2>INICIAR SESION</h2>
          <hr />
          <input
            placeholder="Correo Electronico"
            type="text"
            value={email}
            name="email"
            onChange={onInputChange}
          />
          <input
            placeholder="Contraseña"
            type="password"
            value={password}
            name="password"
            onChange={onInputChange}
          />
          <br />
          <Button
          type="submit"
            variant="contained"
            size="large"
            color="success"
            disabled={isAuth}
            onClick={onSubmitWhitEmail}
          >
            INGRESAR
          </Button>
          <br/>
          <Button
            style={{marginTop: '15px', borderRadius: '30px', backgroundColor: 'white'}}
            onClick={onGoogleSubmit}
            disabled={isAuth}
          >
            <img src={logoGoogle} style={{width: '20px'}}/>
            <a style={{marginLeft: '10px', color: 'black'}}>INGRESAR CON GOOGLE</a>
          </Button>
          <br />
        </form>
        <br/>
        <Button variant="outlined" onClick={()=>navigate("/registro")} disabled={isAuth}>REGISTRARSE</Button>
        <br/>
        {status === 'checking' ? <div style={{marginTop: '20px'}}>
          <CircularProgress/>
        </div> : null}
      </div>
    </>
  );
};
