import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

const Layout = ({children, ...restProps}: Props) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

export default Layout