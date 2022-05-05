import { axiosBase as axios } from "./Config";

export const Post_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/post")
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_Register = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/post")
        console.log("post ");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_Update = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/post/:id", {id})
        console.log("post");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/post/:id", {id})
        console.log("post");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_GetById = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/post/:id", {id})
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_GetByCategory= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/posts/category/:id", {id})
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}
export const Post_GetByName= async (name) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/posts/search/:name", {name})
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}