import axios from "axios";

const content = 'categoryG'

export const getCategory = async ()=> {
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}


export const addCategory = async (data)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, data)
}

export const editCategory = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/${content}/${id}`, data)
}

export const deleteCategory = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/${content}/${id}`)
}

