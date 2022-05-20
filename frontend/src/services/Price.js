import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Price_GetAll= async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Register= async (price) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/price", price, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Update= async (id, price) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put(`/price/${id}`, price, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        if(response.status==200) {
            console.log("llego a codigo 200");
            return response.data;
          }else{
              return []
          }
        
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Delete= async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/price/:id", id, {
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

export const Price_GetById= async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`price/${id}`, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
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

export const Price_GetByPost= async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`price/post/${id}`, {
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

export const Price_GetByPostAll= async (id, opc) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`price/post/${id}/${opc}`, {
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