import axios from "axios";
const API_URL = 'http://127.0.0.1:5000/api';

class TaskService {
    
    async Save(task) { 
        const res = await axios.post(`${API_URL}/task`,task)
        return res.data;
    }
    async getTasks(user){
        const res = await axios.get(`${API_URL}/tasks/${user.email}`)
        return res.data;
    }
    removeTask(id){
        const res = axios.delete(`${API_URL}/task/${id}`)
        return res.data;
    }
    async editTask(task){
        const res = await axios.post(`${API_URL}/task/${task._id}`,task)
        return res.data;
    }
}
export default new TaskService;

