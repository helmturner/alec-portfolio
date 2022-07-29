import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = ({ children, ...restProps }: Props) => {
    return (
        <div className="container" {...restProps}>
            {children}
        </div>
    );
}
export default Container;