// `usePageContext` allows us to access `pageContext` in any Preact component.
// See https://vike.dev/pageContext-anywhere

import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { type PageContext } from "vike/types";

export { PageContextProvider };
export { usePageContext };

const Context = createContext<PageContext>(undefined);

function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
