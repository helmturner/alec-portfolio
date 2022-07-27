import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

const Nav = ({ ...restProps }: Props) => {
  return (
    <nav {...restProps}>
      <Link href="/">
          <a>Home</a>
        </Link>
        <a href="https://github.com/alecvision">Github</a>
        <a href="https://linkedin.com/in/alechelmturner">LinkedIn</a>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
    </nav>
  );
};

export default Nav;
