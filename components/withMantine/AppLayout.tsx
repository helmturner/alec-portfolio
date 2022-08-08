import {
  AppShellProps,
  Aside,
  Box,
  Burger,
  Footer,
  Group,
  Header,
  Navbar,
  NavLink,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import Image from "next/future/image";
import glasses from "../../public/images/glasses.svg";
import {
  bioParagraphs,
  firstName,
  gitHubUrl,
  lastName,
  linkedInUrl,
} from "../../constants";
import Link from "next/link";
//import linkedin from "images/LinkedIn-Logos/LI-In-Bug.png";
//import octocat from "images/GitHub-Mark/GitHub-Mark-32px.png";

const AppLayout = ({ children }: AppShellProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useClickOutside(() => setNavOpen(false));
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(20, minmax(1ch, 1fr))",
        gridTemplateRows: "repeat( auto-fit, minmax(20px, 1fr) )",
        "> *": {
          gridColumn: "1 / -1",
          gridRow: "3 / -2",
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: "subgrid",
          "> * ": {
            gridColumn: "1 / -1",
          },
        },
      }}
    >
      <Group
        sx={{
          gridColumn: "4 / span 14",
          gridRow: "1 / span 1",
          display: "block",
          position: "relative",
          textAlign: "center",
          top: 0,
          small: {
            position: "static",
            fontWeight: "bold",
            fontSize: "1.2rem",
            margin: ".1em",
          },
          img: {
            width: "auto",
            height: "clamp(60px, 35vw, 30vh)",
            justifySelf: "center",
          },
        }}
      >
        <small>{"You're watching"}</small>
        <br />
        <Image
          src={glasses}
          priority={true}
          placeholder="empty"
          alt="AlecVision"
        />
      </Group>
      <Header
        unstyled
        height="auto"
        sx={{
          display: "block",
          gridColumn: "4 / span 14",
          gridRow: "2 / span 1",
          justifySelf: "center",
          h1: {
            marginBlock: ".1em",
            position: "sticky",
            top: "0",
          },
        }}
      >
        <h1>
          <strong>AlecVision</strong>
        </h1>
        <Burger
          sx={{ display: "none" }}
          opened={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        />
      </Header>
      <Navbar
        data-nav-open={navOpen}
        sx={{
          display: "flex",
          position: "sticky",
          height: "100%",
          bottom: 0,
          alignSelf: "self-start",
          gridColumn: "1 / 4",
          gridRow: "2 / span 2",
          boxShadow: "2px 0px 10px 2px grey",
        }}
        ref={navRef}
      >
        <div>
          <Link href="/" passHref>
            <NavLink component="a" label="Home" />
          </Link>
          <Link href="/projects" passHref>
            <NavLink component="a" label="Projects" />
          </Link>
          <Link href="/resume" passHref>
            <NavLink component="a" label="Resume" />
          </Link>
          <NavLink
            component="a"
            href={gitHubUrl}
            icon={<Image alt="GitHub" src={"/images/GitHub-Mark/GitHub-Mark-32px.png"} height={32} width={32} />}
          />
          <NavLink
            component="a"
            href={linkedInUrl}
            icon={
              <Image alt="LinkedIn" src={"/images/LinkedIn-Logos/LI-In-Bug.png"} height={32} width={32} />
            }
          />
        </div>
      </Navbar>
      <Aside
        sx={{
          display: "flex",
          position: "sticky",
          height: "100%",
          bottom: 0,
          alignSelf: "self-start",
          gridColumn: "18 / span 3",
          gridRow: "2 / span 2",
          boxShadow: "2px 0px 10px 2px grey, 0 0 0 0",
        }}
      >
        <Group>
          <h2>Bio</h2>
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Group>
      </Aside>
      <Box
        sx={{
          display: "flex",
          gridColumn: "4 / span 14",
          gridRow: "2 / span 1",
          "img": {
            width: "100%",
            height: "auto"
          }
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer
        sx={{
          textAlign: "center",
          gridColumn: "1 / span 20",
          gridRow: "3 / 4",
        }}
        height="auto"
      >
        <small>
          © {`${new Date().getFullYear()} ${firstName} ${lastName}`}{" "}
        </small>
      </Footer>
    </Box>
  );
};

export default AppLayout;
