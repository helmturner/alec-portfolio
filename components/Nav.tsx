import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import {gitHubUrl, linkedInUrl} from '../constants'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
}

const Nav = ({ ...restProps }: Props) => {
  return (
    <nav {...restProps}>
      <Link href="/">
          <a>Home</a>
        </Link>
        <a href={gitHubUrl}>Github</a>
        <a href={linkedInUrl}>LinkedIn</a>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
    </nav>
  );
};

export default Nav;
