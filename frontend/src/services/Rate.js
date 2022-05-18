import { axiosBase as axios } from "./Config";


export const Rate_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/rate")
        console.log("All vendors",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Register = async (data) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/rate")
        console.log("Rate register", response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Update = async (data) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/rate:/id", {data})
        console.log("Rate update",data);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/rate/:id", {id})
        console.log("Rate delete", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/rate/:id", {id})
        console.log("rate: ", response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Rate_GetByUser = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/rate/user/${id}`)
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
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/rate/post/${id}`)
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

