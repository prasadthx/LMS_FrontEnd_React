import axios from "axios";

const API_URL = 'http://localhost:4000/api/';

export default class AuthService{
    login(username:string, password:string){
        return axios.post(API_URL + 'signin' ,{
            username,
            password
        }).then(
            (response) => {
                if(response.data.accessToken){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            }
        )
    }

    logout(){
        localStorage.removeItem('user')
    }

    register(username:string, email:string, password:string){
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password
        })
    }

    getCurrentUser(){
        return JSON.parse(String(localStorage.getItem('user')))
    }
}