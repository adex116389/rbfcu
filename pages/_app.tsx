import "../styles/globals.css";
import "../styles/styles.css";

import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { generateString } from "../utils/generateString";

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({
    sessionId: generateString(10),
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;
