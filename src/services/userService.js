import axios from "axios";
const API_URL = 'http://127.0.0.1:5000/api';




class UserService {
    
    async Register(user) { 
        //flask y mongodb
        let res = await axios.post(`${API_URL}/users`,user)
        return res.data;
    }
    async Login(user){
        let res = await axios.post(`${API_URL}/users/login`,user)
        return res.data;
    }
}
export default UserService;

