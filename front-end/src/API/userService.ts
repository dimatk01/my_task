import axios from "axios";
import { User } from "../types/user-type";
const URL = "http://localhost:5000/api/users/registration";
export class userService {
    static async registerNewUser(
        setIsRegister: React.Dispatch<
            React.SetStateAction<{
                register: boolean;
                error: null;
            }>
        >,
        user: User
    ) {
        try {
            await axios.post(URL, user);
            setIsRegister({ register: true, error: null });
        } catch (error: any) {           
            setIsRegister({
                register: false,
                error: error.response.data.message,
            });
        }
    }
}
