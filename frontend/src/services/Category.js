import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Cat_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/category")
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
export const Cat_Register = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/category", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_Update = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/category/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/category/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_GetOne = async (id) => {

    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/category/${id}`)
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