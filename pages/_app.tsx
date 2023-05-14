import "@/styles/index.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { SessionProvider } from "next-auth/react";

nProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
