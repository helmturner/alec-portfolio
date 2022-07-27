import { DetailedHTMLProps, HTMLAttributes } from "react";
import {firstName, lastName} from '../constants'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactNode;
}

const Footer = ({children, ...restProps}: Props) => {
    return (
        <footer {...restProps}>
            <small>© {`${new Date().getFullYear()} ${firstName} ${lastName}`} </small>
        </footer>
    );
}

export default Footer