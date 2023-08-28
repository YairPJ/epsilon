
import { downloadInformationFromFirebase } from "../../helpers/downloadInformationFromFirebase";
import { sendInfo } from "../../helpers/sendInfo";
import { entradaComida, finalizarJornada, inicioDeJornada, salidaComer, setIsLoading } from "./WorkTime";
import { showMessage } from "../HomeReducer/Home";


export const startConsultInformation=(dateData)=>{
    return async(dispatch, getState)=>{
        dispatch(setIsLoading(true));
        const {name, dataUser} = getState().auth;
        const company = dataUser.Empresa;
        const path=`/${company}/TiempoDeTrabajo/${dateData}`;
        const data = await downloadInformationFromFirebase(path);
        if(data[name]){
        if(data[name].Entrada){
            dispatch(inicioDeJornada(data[name].Entrada));
        }
        if(data[name].SalidaComer){
            dispatch(salidaComer(data[name].SalidaComer));
        }
        if(data[name].RegresoComer){
            dispatch(entradaComida(data[name].RegresoComer));
        }
        if(data[name].Salida){
            dispatch(finalizarJornada(data[name].Salida));
        }
        dispatch(setIsLoading(false));
    }else{
        dispatch(setIsLoading(false));
    }
        
    };
}

export const startSendWorkTime=(data, dateData)=>{
    return async(dispatch, getState)=>{
        dispatch(setIsLoading(true));
        const {name, dataUser} = getState().auth;
        const company = dataUser.Empresa;
        const path=`/${company}/TiempoDeTrabajo/${dateData}/${name}`;
        const resp = sendInfo(path, data);
        if(resp){
            dispatch(setIsLoading(false));
            dispatch(showMessage(['info','Informacion enviada con exito!!!']))
        }else{
            dispatch(setIsLoading(false));
            dispatch(showMessage(['error','Error al enviar la informacion']))
        }
    }    

}