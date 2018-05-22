export default class AuthService {
    static login() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1200);
        });
    }
    
    static logout() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1200);
        });
    }
}
