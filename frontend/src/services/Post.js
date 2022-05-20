import { axiosBase as axios } from "./Config";

export const Post_GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/post")
        
        if(response.status==200) {
            return response.data;
        }else{
            return[]
        }

    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_Register = async (post) => {

    try{
        let data = new FormData();
        data.set('name', post.name);
        data.set('content', post.content);
        data.set('_user', post._user);
        data.set('_category', "6281864dea063144676f6195");
        data.set('created_at', post.created_at);
        data.set('images', post.images, `${post.images.lastModified}.${post.images.name}`);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/post", post, {
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

export const Post_Update = async (id, post) => {
    console.log("post service 2 ", post);
    console.log("id", id);
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put(`/post/${id}`, post, {
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

export const Post_Delete = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/post/:id",  id)
        console.log("post");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_GetById = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/post/${id}`)
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

export const Post_GetByCategory= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/posts/category/:id", id)
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Post_GetByName= async (name) => {
    try{
        //Respuesta de un await con la ruta del api
        console.log(name);
        const response = await axios.get(`/posts/search/${name}`)
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