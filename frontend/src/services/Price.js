import { axiosBase as axios } from "./Config";

export const Price_GetAll= async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price")
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Register= async (price) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/price", price)
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Update= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/price/:id", id)
        console.log(response)
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Delete= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/price/:id", id)
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_GetById= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price/:id", id)
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_GetByPost= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`price/post/${id}`)
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

export const Price_GetByPostAll= async (id, opc) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`price/post/${id}/${opc}`)
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