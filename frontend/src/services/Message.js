import { axiosBase as axios } from "./Config";

export const Mssg_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/message")
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_Register = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/message")
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_Update = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/message/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/message/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_GetById = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/message/:id", {id})
        console.log(response)
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Mssg_GetByIUser = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/message/:id", {id})
        console.log(response)

    }catch(err){
        console.error(err);
        return err;
    }
}