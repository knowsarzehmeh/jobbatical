import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../server/api";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
