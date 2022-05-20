import { axiosBase as axios } from "./Config";
import Cookie from 'cookie-universal';

export const User_GetAll = async () => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/user", {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
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
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put(`/user/${id}`, user, {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + cookieTemp
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
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/user/:id", {id}, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
        })
        console.log("adios?", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const User_GetOne = async (id) => {
    const cookies = Cookie();
    const cookieTemp = cookies.get('user');
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/user/${id}`, {
            headers: {
                "Authorization": "Bearer " + cookieTemp
            }
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

export const User_Login = async (data) => {

    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/user/login", data)
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