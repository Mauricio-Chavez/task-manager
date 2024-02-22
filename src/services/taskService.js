import axios from "axios";
const API_URL = 'http://127.0.0.1:5000/api';

class TaskService {
    
    Save(task) { 
        const res = axios.post(`${API_URL}/task`,task)
        return res.data;
    }
    getTasks(){
        const res = axios.get(`${API_URL}/tasks`)
        console.log(res)
        return res.data;
    }
    removeTask(id){
        const res = axios.delete(`${API_URL}/task/${id}`)
        return res.data;
    }
    editTask(id,task){
        const res = axios.put(`${API_URL}/task/${id}`,task)
        return res.data;
    }
}
export default new TaskService;

