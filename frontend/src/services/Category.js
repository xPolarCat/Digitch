import { axiosBase as axios } from "./Config";

export const Cat_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/category")
        console.log("respuesta: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_Register = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/category")
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_Update = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/category/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/category/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Cat_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/category/:id", {id})
    }catch(err){
        console.error(err);
        return err;
    }
}