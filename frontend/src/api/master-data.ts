import axios from "axios";

export const getMasterCourses = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/master-data`)
    return response.data.data
}