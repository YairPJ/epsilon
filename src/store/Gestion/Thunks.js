import { loadInfo } from "../../helpers/loadInfo";
import { setData } from "./Gestion";

export const startLoadingData=()=>{
    return async(dispatch)=>{
        const data = await loadInfo("/EPSILON SA DE CV/Info/InformacionDeLaEmpresa");
        dispatch(setData(data));

    }
}