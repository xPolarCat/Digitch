import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Mssg_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/message", {
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
export const Mssg_Register = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/message", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_Update = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/message/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/message/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_GetById = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/message/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log(response)
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_GetByIUser = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/message/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log(response)

    }catch(err){
        console.error(err);
        return err;
    }
}

export const Mssg_GetByUsers = async (data)=> {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        console.log("M", data)

        const response = await axios.post("/message/users", {data}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        });
        
        if(response.status==200) {
            console.log(response.data);
            return response.data;
          }else{
              return []
          }

    }catch(err){
        console.error(err);
        return err;
    }
}