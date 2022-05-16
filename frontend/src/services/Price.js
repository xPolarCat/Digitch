import { axiosBase as axios } from "./Config";

export const Price_GetAll= async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price")
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Register= async (price) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/price", price)
        console.log("success");
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Update= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/price/:id", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_Delete= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/price/:id", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_GetById= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price/:id", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const Price_GetByPost= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/price/:_post", {id})
        console.log("id: ", id);
    }catch(err){
        console.error(err);
        return err;
    }
}
