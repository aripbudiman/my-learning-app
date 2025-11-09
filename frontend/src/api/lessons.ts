import axios from "axios";

const url = import.meta.env.VITE_API_URL

export const store = async (data: any) => {
    const response = await axios.post(`${url}/api/lessons`, data)
    return response.data.data
}