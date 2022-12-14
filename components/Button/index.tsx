import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './style.module.css';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({children, ...restProps}: Props) => (
    <button className={styles.button}>
        {children}
    </button>
);

export default Button;