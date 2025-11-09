import axios from "axios";

const url = import.meta.env.VITE_API_URL
export const getMasterCourses = async () => {
    const response = await axios.get(`${url}/api/courses/master-data`)
    return response.data.data
}

export const getMasterModules = async (id: number) => {
    const response = await axios.get(`${url}/api/modules/by-course/${id}`)
    return response.data.data
}