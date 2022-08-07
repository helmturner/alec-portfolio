import React from "react";
import styles from "./styles.module.css";
import Image from "next/future/image";
import glasses from "../../public/images/glasses.svg";
import { firstName, lastName } from "../../constants";
import Link from "next/link";
import { gitHubUrl, linkedInUrl } from "../../constants";
import linkedin from "../../public/images/LinkedIn-Logos/LI-In-Bug.png";
import octocat from "../../public/images/GitHub-Mark/GitHub-Mark-32px.png";

import theme from "../../styles/theme.module.css";

type _Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type Props = _Props & {
  footerProps?: _Props;
  headerProps?: _Props;
  navProps?: _Props;
}

const AppLayout = ({
  footerProps,
  headerProps,
  navProps,
  className,
  children,
  ...others
}: Props) => {
  const {
    className: headerClassName,
    children: headerChildren,
    ...headerOthers
  } = headerProps ?? {};
  const {
    className: navClassName,
    children: navChildren,
    ...navOthers
  } = navProps ?? {};
  const {
    className: footerClassName,
    children: footerChildren,
    ...footerOthers
  } = footerProps ?? {};

  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const closeNav = () => {
    checkboxRef.current && (checkboxRef.current.checked = false);
  };

  return (
    <form>
      <input
        className={styles.burger}
        type="checkbox"
        id="#burger"
        defaultChecked={false}
        ref={checkboxRef}
      />
      <label htmlFor="#burger" className={styles.overlay} />
      <header
        className={`${styles.header} ${headerClassName}`}
        {...headerOthers}
      >
        <label className={styles.burger} htmlFor="#burger">
          <div className={styles.burgermark}></div>
          <div className={styles.burgermark}></div>
          <div className={styles.burgermark}></div>
        </label>
        <h1>
          <small>{"You're watching"}</small>
          <br />
          <strong>AlecVision</strong>
        </h1>
        <Image
          src={glasses}
          priority={true}
          placeholder="empty"
          alt="AlecVision"
        />
      </header>
      <label htmlFor="#burger">
        <nav
          className={`${styles.nav}${navClassName}`}
          {...navOthers}
          onClick={closeNav}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
          <a href={gitHubUrl}>
            <Image alt="GitHub" src={octocat} height={32} width={32} />
          </a>
          <a href={linkedInUrl}>
            <Image alt="LinkedIn" src={linkedin} height={32} width={32} />
          </a>
        </nav>
      </label>
      <main className={`${className}`} {...others}>
        {children}
      </main>
      <footer className={`${footerClassName}`} {...footerOthers}>
        <small>
          © {`${new Date().getFullYear()} ${firstName} ${lastName}`}
        </small>{" "}
      </footer>
    </form>
  );
};

export default AppLayout;
