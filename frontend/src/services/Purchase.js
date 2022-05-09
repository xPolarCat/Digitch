import { axiosBase as axios } from "./Config";

export const Purchase_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/purchase")
        console.log("All purchases",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Register = async (data) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/purchase", {data})
        console.log("",data);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Update = async (data) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/purchase/:id", {data})
        console.log("",data);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/purchase/:id", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Purchase_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/purchase/:id", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

