import axios from "axios";

const content = 'product'

export const getProduct = async ()=> {
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}


export const addProduct = async (data)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, data)
}

