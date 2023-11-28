import axios from "axios";

const content = 'category'

export const getCategory = async ()=> {
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}


export const addCategory = async (data)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, data)
}

//    npm i --force