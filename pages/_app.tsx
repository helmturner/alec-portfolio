import type { AppProps } from "next/app";
import AppLayout from "../components/withMantine/AppLayout";
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
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  );
}

export default MyApp;
