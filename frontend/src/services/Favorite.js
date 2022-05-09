import { axiosBase as axios } from "./Config";

export const Fav_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/favorite")
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_Register = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/favorite")
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/favorite/:id", {id})
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Fav_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/favorite/:id", {id})
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}