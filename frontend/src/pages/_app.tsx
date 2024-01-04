import "@/styles/index.scss";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { queryMeContext } from "@/components/graphql/Users";
import { useEffect } from "react";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#ffa41b",
      light: "#FFB648",
      dark: "#e89116",
    },
    secondary: {
      main: "#343a40",
      light: "#5C6166",
      dark: "#24282C",
    },
  },
});
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:5000/",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

const privatePages = ["/compte", "/annonces/new"];

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { loading, error, refetch } = useQuery(queryMeContext);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (privatePages.includes(url)) {
        refetch();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, refetch]);

  useEffect(() => {
    if (privatePages.includes(router.pathname) && error) {
      router.replace("/connexion");
    }
  }, [router, error]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return children;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
