import React, { Children, ReactNode } from 'react';

import styles from './MyButton.module.css';

interface MyButtonProps {
    children: ReactNode;
}

const MyButton:React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children,...props} ) => {

    return (
        <button {...props} className={styles.root}>
           {children}
        </button>
    );
};

export default MyButton;
