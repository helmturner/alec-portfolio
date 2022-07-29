import { DetailedHTMLProps, HTMLAttributes } from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import styles from './AppLayout.module.css';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AppLayout = ({children}: Props) => {
    return (
        <div className={styles.wrapper}>
            <Nav className={styles.nav} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer} />
        </div>
    )
}

export default AppLayout;
