import { ReactNode, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { useClickOutside } from "@mantine/hooks";
import {
  AppShell,
  Navbar,
  NavLink,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Group,
} from "@mantine/core";
import {
  gitHubUrl,
  linkedInUrl,
  firstName,
  lastName,
  bioParagraphs,
} from "../../constants";
import glasses from "../../public/images/glasses.svg";

const Layout = ({ children }: { children: ReactNode }) => {
  //  const theme = useMantineTheme();
  const [navOpened, setNavOpened] = useState(false);
  const [asideOpened, setAsideOpened] = useState(false);

  const [burger, setBurger] = useState<HTMLElement | null>(null);
  const [navLink1, setNavLink1] = useState<HTMLElement | null>(null);
  const [navLink2, setNavLink2] = useState<HTMLElement | null>(null);
  const [navLink3, setNavLink3] = useState<HTMLElement | null>(null);
  const [navLink4, setNavLink4] = useState<HTMLElement | null>(null);
  const [navLink5, setNavLink5] = useState<HTMLElement | null>(null);

  const asideBreakpoint = "md";
  const navbarBreakpoint = "xs";

  useClickOutside(() => setNavOpened(() => false), undefined, [
    burger!,
    navLink1!,
    navLink2!,
    navLink3!,
    navLink4!,
    navLink5!,
  ]);

  return (
    <MediaQuery smallerThan="xs" styles={{ main: { paddingLeft: "8px" } }}>
      <MediaQuery
        smallerThan={asideBreakpoint}
        styles={{ main: { paddingRight: "8px" } }}
      >
        <AppShell
          styles={{
            main: {
              display: "flex",
              flexDirection: "column",
              "& img": { width: "100%", height: "auto" },
            },
          }}
          navbar={
            <Navbar
              p="md"
              hidden={!navOpened}
              hiddenBreakpoint={navbarBreakpoint}
              width={{
                base: 150,
                xs: 200,
                sm: 225,
                md: 250,
                lg: 275,
                xl: 300,
              }}
            >
              <Link href="/" passHref>
                <NavLink
                  ref={setNavLink1}
                  onClick={() => setNavOpened(() => false)}
                  component="a"
                  label="Home"
                />
              </Link>
              <Link href="/projects" passHref>
                <NavLink
                  ref={setNavLink2}
                  onClick={() => setNavOpened(() => false)}
                  component="a"
                  label="Projects"
                />
              </Link>
              <Link href="/resume" passHref>
                <NavLink
                  ref={setNavLink3}
                  onClick={() => setNavOpened(() => false)}
                  component="a"
                  label="Resume"
                />
              </Link>
              <NavLink
                ref={setNavLink4}
                onClick={() => setNavOpened(() => false)}
                component="a"
                href={gitHubUrl}
                icon={
                  <Image
                    alt="GitHub"
                    src={"/images/GitHub-Mark/GitHub-Mark-32px.png"}
                    height={32}
                    width={32}
                  />
                }
              />
              <NavLink
                ref={setNavLink5}
                onClick={() => setNavOpened(() => false)}
                component="a"
                href={linkedInUrl}
                icon={
                  <Image
                    alt="LinkedIn"
                    src={"/images/LinkedIn-Logos/LI-In-Bug.png"}
                    height={32}
                    width={32}
                  />
                }
              />
            </Navbar>
          }
          aside={
            <MediaQuery
              smallerThan={asideBreakpoint}
              styles={{ display: "none" }}
            >
              <Aside
                sx={{ overflow: "scroll" }}
                p="md"
                hiddenBreakpoint="sm"
                hidden={!asideOpened}
                width={{
                  base: 250,
                  md: 250,
                  lg: 275,
                  xl: 300,
                }}
              >
                <h2>Bio</h2>
                {bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Aside>
            </MediaQuery>
          }
          footer={
            <Footer height={50} p="md">
              <small>
                © {`${new Date().getFullYear()} ${firstName} ${lastName}`}
              </small>
            </Footer>
          }
          header={
            <Header height={85} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MediaQuery
                  largerThan={navbarBreakpoint}
                  styles={{ display: "none" }}
                >
                  <Burger
                    ref={setBurger}
                    opened={navOpened}
                    onClick={() => setNavOpened((open) => !open)}
                    size="sm"
                    mr="md"
                  />
                </MediaQuery>
                <Group
                  sx={{
                    gap: "0px",
                    boxSizing: "content-box",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    flexShrink: 1,
                    height: "min-content",
                    width: "min-content",
                    marginRight: "auto",
                    "& small": {
                      padding: 0,
                      margin: 0,
                      backdropFilter: "blur(10px)",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "9pt",
                    },
                    "& img": {
                      paddingBlock: "0em",
                      backdropFilter: "blur(10px)",
                      height: "auto",
                      width: "clamp(100px, 5vw, 140px)",
                      marginBlock: "0"
                    },
                  }}
                >
                  <small>{"You're watching"}</small>
                  <Image
                    src={glasses}
                    priority={true}
                    placeholder="empty"
                    alt=""
                  />
                </Group>
                <Box
                  sx={{
                    "& h1": {
                      paddingBlock: "0",
                      marginBlock: "0",
                      marginRight: "1vw",
                    },
                  }}
                >
                  <h1>
                    <strong>AlecVision</strong>
                  </h1>
                </Box>
              </div>
            </Header>
          }
        >
          {children}
        </AppShell>
      </MediaQuery>
    </MediaQuery>
  );
}

export default Layout