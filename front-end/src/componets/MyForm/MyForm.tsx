import React, {
    MouseEvent,
    MouseEventHandler,
    useState,
    useEffect,
} from "react";

import styles from "./MyForm.module.css";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import { userService } from "../../API/userService";
import ResultMessage from "../resultMessage/ResultMessage";
const MyForm = () => {
    const initUser = {
        name: "",
        email: "",
        password: "",
    };
    const initRegister = {
        register: false,
        error: null,
    }
    const [user, setUser] = useState(initUser);
    const [isRegister, setIsRegister] = useState(initRegister);
    useEffect(() => {
        setUser(initUser);
        setIsRegister(initRegister)
    }, [isRegister.register]);
    const buttonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        userService.registerNewUser(setIsRegister, user);
    };
    return (
        <form className={styles.root}>
            <h1>Registration</h1>
            <div className={styles.input_block}>
                <MyInput
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={user.name}
                    className={styles.input}
                    type="text"
                    placeholder="enter your name"
                />
                <MyInput
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    className={styles.input}
                    type="email"
                    placeholder="enter your email"
                />
                <MyInput
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    value={user.password}
                    className={styles.input}
                    type="password"
                    placeholder="enter your password"
                />
            </div>
            <MyButton onClick={buttonHandler}>Sign up</MyButton>
            {isRegister.register && (
                <ResultMessage
                    isRegister={isRegister.register}
                    message={["You are successfully registered"]}
                />
            )}
            {isRegister.error && (
                <ResultMessage
                    isRegister={isRegister.register}
                    message={isRegister.error}
                />
            )}
        </form>
    );
};

export default MyForm;
