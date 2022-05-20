import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Rate_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/rate", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("All vendors",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Register = async (data) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/rate", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("Rate register", response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Update = async (data) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/rate:/id", {data}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("Rate update",data);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/rate/:id", {id},  {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("Rate delete", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_GetOne = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/rate/:id", {id},  {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("rate: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_GetByUser = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/rate/user/${id}`,  {
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

export const Rate_GetByPost = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/rate/post/${id}`,  {
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

