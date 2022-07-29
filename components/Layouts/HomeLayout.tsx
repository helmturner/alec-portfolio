import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./HomeLayout.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
     {children}
    </div>
  );
};

export default HomeLayout;
