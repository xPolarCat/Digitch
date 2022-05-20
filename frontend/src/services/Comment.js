import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Comm_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/comment")
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Comm_Register = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/comment")
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Comm_Update = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/comment")
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Comm_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/comment/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Comm_GetById = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`comment/${id}`)
        if(response.status==200) {
            return response.data;
          }else{
              return {}
          }
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Comm_GetByPost = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/comment/post/${id}`, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        if(response.status==200) {
            return response.data;
          }else{
              return []
          }
    }catch(err){
        console.error(err);
        return err;
    }
}