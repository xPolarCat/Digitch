import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Fav_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/favorite", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_Register = async (body) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    console.log(body)
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/favorite", {body}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/favorite/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_GetOne = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/favorite/${id}`, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        if(response.status==200) {
            return response.data;
          }else{
              return []
          }
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Fav_GetUser = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    console.log(id, "idFav")
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/favorite/user/${id}`, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })

        if(response.status==200) {
            return response.data;
          }else{
              return []
          }
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}