import axios from "axios";

const content = 'size'

export const getSizesList = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const editSize = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/${content}/${id}`, data)
}

export const deleteSize = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/${content}/${id}`)
}

export const addSize = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, data)
}


