import type { AppProps } from "next/app";
import Layout from "../components/withMantine/Layout";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
