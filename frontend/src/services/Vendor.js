import { axiosBase as axios } from "./Config";

export const Vendor_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/vendor")
        console.log("All vendors",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Vendor_Register = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/vendor")
        console.log("obtengo");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Vendor_Update = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/vendor/:id", {id})
        console.log("obtengo",id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Vendor_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/vendor/:id", {id})
        console.log("obtengo",id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Vendor_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/vendor/:id", {id})
        console.log("obtengo",response);
    }catch(err){
        console.error(err);
        return err;
    }
}