import { checkingCredentials, login, logOut } from "./authSlice"
import { singInWhitGoogle,RegisterWhitEmail,singWhitEmail, LogOutFirebase } from "./Firebase/Providers";
import {cleanSolicitud} from '../erpApp/Solicitud';


export const checkingAuth=(email, password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}


//ASI DE DECLARA CADA UNO Y SE NECESITA UNO PARA CADA ACCION(FUNCION)

export const startGoogleSingIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result = await singInWhitGoogle();
        if(!result.ok){
            return dispatch(logOut(result.errorMessage)); //SIEMPRE DEBE IR UN RETURN
        }else{
            dispatch(login(result));
        }
    }
}

export const startSignInEmail=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const resp = await(singWhitEmail({email,password}))
        if(!resp.ok){
            return dispatch(logOut(resp));
        }else{
            dispatch(login(resp));
        }

}
}

export const startCreateUserWhitEmailAndPassword=({nombre,apellidop,apellidom,password,email})=>{
    const displayName=nombre+" "+apellidop+" "+apellidom;
    
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMesagge} = await(RegisterWhitEmail({email,password,displayName}));
        if(!ok)return dispatch(logOut({errorMesagge}));

        dispatch(login({uid, displayName, email, photoURL}));
    }
}

export const startLogOutWhitFirebase=()=>{
    return async(dispatch)=>{
        await LogOutFirebase();

        dispatch(logOut());
        dispatch(cleanSolicitud());
    }
}