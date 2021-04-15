export default function authHeader(){
    const user = JSON.parse(String(localStorage.getItem('user')));
    if (user && user.accessToken){
        return {
            Authorization: 'Bearer ' + user.accessToken
        }
    }
    else {
        return {}
    }
}