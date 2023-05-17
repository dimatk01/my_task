import React from "react";

import styles from "./ResultMessage.module.css";

interface ResultMessageProps {
    isRegister: boolean;
    message: Array<string>;
}

const ResultMessage = ({ isRegister, message }: ResultMessageProps) => {
    const messageClasses = isRegister ? styles.success : styles.error;
    return (
        <div className={styles.root}>
            {message.map((i) => (
                <div className={messageClasses}>{i}</div>
            ))}
        </div>
    );
};

export default ResultMessage;
