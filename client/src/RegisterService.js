import axios from 'axios';

const url = 'api/users/';

class RegisterService{
    //Get Users
    static getUsers(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(user => ({
                        ...user
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    static insertUser(username, password){
        return axios.post(url, {
            username,
            password
        });
    }
}

export default RegisterService;