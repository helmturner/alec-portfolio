import { DetailedHTMLProps, HTMLAttributes } from "react";
import {firstName, lastName} from '../constants'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Footer = ({className, ...restProps}: Props) => {
    return (
        <footer className={className ?? 'footer'} {...restProps}>
            <small>© {`${new Date().getFullYear()} ${firstName} ${lastName}`} </small>
        </footer>
    );
}

export default Footer