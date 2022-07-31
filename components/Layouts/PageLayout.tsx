import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./PageLayout.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
     {children}
    </div>
  );
};

export default PageLayout;
