import { DetailedHTMLProps, HTMLAttributes } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
