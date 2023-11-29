import React from "react";

import { ReactQueryProvider } from "./ReactQueryProvider";

const AppProvider = ({ children }: any) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);

export { AppProvider };
