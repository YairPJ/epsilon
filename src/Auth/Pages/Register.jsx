import React, { useMemo, useState } from 'react'
import '../styles/login.css';
import Button from '@mui/material/Button';
import { useForm } from '../../Hooks';
import { Alert, TextField,Grid } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { startCreateUserWhitEmailAndPassword } from '../../store/auth/thunks';


export const Register = () => {

  const dispatch=useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const {status, errorMesaje} = useSelector(state => state.auth);
  const isChecking = useMemo(()=> status==='checking',[status]);
  
  const formData={
    email: '',
    password: '',
    nombre: '',
    apellidop: '',
    apellidom: '',
    confirmPassword: '',
  }

  const formValidations={
    password: [(value)=>value.length >=6, 'La contraseña debe de tener minimo 6 caracteres' ],
    confirmPassword: [(value)=>value==formState.password, 'Las contraseñas no coinciden'],
  } //Esto es para hacer validaciones en cada input

  const {email, password, nombre, apellidop, apellidom, confirmPassword, formState, emailValid, passwordValid, confirmPasswordValid, onInputChange, isFormValid} = useForm(formData, formValidations);



  const onsubmit=(event)=>{
    event.preventDefault();
    setformSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreateUserWhitEmailAndPassword(formState));

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
        <form onSubmit={onsubmit}>
          <div className="logo-container">
          </div>
          <h2>REGISTRO</h2>
          <hr />
          <TextField
            className="input"
            placeholder="Nombre"
            type="text"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
            required
          />
          <br/>
          <br/>
          <TextField
            className="input"
            placeholder="Apellido Paterno"
            type="text"
            name="apellidop"
            value={apellidop}
            onChange={onInputChange}
            required
          />
          <br/>
          <br/>
          <TextField
            className="input"
            placeholder="Apellido Materno"
            type="text"
            name="apellidom"
            value={apellidom}
            onChange={onInputChange}
            required
          />
          <br/>
          <br/>
          <TextField
            className="input"
            placeholder="Correo Electronico"
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
          <br/>
          <br/>
          <TextField
            className="input"
            placeholder="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            required
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          />
          <br/>
          <br/>
          <TextField
            className="input"
            placeholder="Confirmar Contraseña"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onInputChange}
            required
            error={!!confirmPasswordValid && formSubmitted}
            helperText={confirmPasswordValid}
          />
          <br />
          <br/>
          <Button variant="outlined" type="submit" disabled={isChecking}>REGISTRARSE</Button>
        </form>
        <br/>
      </div>
    </>
  )
}
