import axios from "axios";

export const createUser= async (data) => {
    try{
        const response = await axios({
            method:"POST",
            baseURL: process.env.REACT_APP_SERVER_URL,
            url:"/user",
            data
        })
        return response.data
    }
    catch(err){
        throw err
    }
}

export const login= async (data) => {
    try{
        const response = await axios({
            method:"POST",
            baseURL: process.env.REACT_APP_SERVER_URL,
            url:"/user/login",
            data
        })
        return response.data
    }
    catch(err){
        throw err
    }
}

export const getUser= async (token) => {
    try{
        const response = await axios({
            method:"GET",
            baseURL: process.env.REACT_APP_SERVER_URL,
            url:"/user",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    }
    catch(err){
        throw err
    }
}