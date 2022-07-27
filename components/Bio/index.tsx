import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: React.ReactNode;
}

const Bio = ({children, ...restProps}: Props) => {
    return (
        <aside {...restProps}>
            {children}
        </aside>
    );
}

export default Bio