import { axiosBase as axios } from "./Config";

export const User_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/user")
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

export const User_Register = async (ouser) => {
    console.log("user SERVICE", ouser);
    try{
        let data = new FormData();
        data.set('name', ouser.name);
        data.set('email', ouser.email);
        data.set('password', ouser.password);
        data.set('descrption', ouser.desc);
        data.set('photo', ouser.photo, `${ouser.photo.lastModified}.${ouser.photo.name}`);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/user", ouser, {
            headers:{
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("My response: ", response); //trae objeto creado
        return response;
    }catch(err){
        console.error(err);
        return err;
    }
}

export const User_Update = async (id, user) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put(`/user/${id}`, user, {
            headers:{
                "Content-Type": "multipart/form-data",
            },
        });
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
        const response = await axios.post("/user", data)
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