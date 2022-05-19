import { axiosBase as axios } from "./Config";

export const User_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/user")
        console.log("All users",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const User_Register = async (user) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/user", user,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
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

export const User_Update = async (id, user) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put(`/user/${id}`, user)
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

export const User_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/user/:id", {id})
        console.log("adios?", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const User_GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/user/${id}`)
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

export const User_Login = async (data) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/user", {data})
        console.log("obtuve: ", data);
    }catch(err){
        console.error(err);
        return err;
    }
}