import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const Purchase_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/purchase", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("All purchases",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Register = async (data) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    console.log("Purchase service", data)
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/purchase", data, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })

        console.log("Purchase service",response);
        return response;

    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Update = async (data) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/purchase/:id", {data}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("",data);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Delete = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/purchase/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_GetOne = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/purchase/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

