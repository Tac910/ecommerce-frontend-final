import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import store from "../redux/store";
import "../styles/globals.css";
import Footer from "../components/Footer";
import { SessionProvider } from "next-auth/react"
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <NextNProgress
        color="#111111"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ easing: "ease", speed: 500, showSpinner: false }}
        showOnShallow={true}
      />
      <Navbar />
      <div className=" font-ibm pt-[4rem] z-0  " >
        <Component {...pageProps} />
          <Footer />
      </div>
      </Provider></SessionProvider>
  );
}
