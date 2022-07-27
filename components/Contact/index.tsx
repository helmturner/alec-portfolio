import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactNode;
}

const Contact = ({children, ...restProps}: Props) => {
    return (
        <address {...restProps}>
            {children}
        </address>
    );
}

export default Contact