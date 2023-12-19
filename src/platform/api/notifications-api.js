import axios from "axios";

const content = 'notificationsG'

export const getNotificationsList = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const addNotification = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, data)
}