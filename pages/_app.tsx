import "../styles/globals.css";
import "../styles/vars.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/Layouts/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
 return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    )
}

export default MyApp;
