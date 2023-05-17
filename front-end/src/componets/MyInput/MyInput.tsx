import React, { ReactNode } from "react";

import styles from "./MyInput.module.css";

const MyInput: React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
> = (props) => {
    return <input {...props} className={styles.root}></input>;
};

export default MyInput;
