import { type ReactNode } from "preact/compat";
import { type PageContext } from "vike/types";

import { PageContextProvider } from "./usePageContext";
import "../global.css";

type PageShellProps = {
  pageContext: PageContext;
  children: ReactNode;
};

export const PageShell = ({ pageContext, children }: PageShellProps) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Header />
      <main>{children}</main>
    </PageContextProvider>
  );
};

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
      </nav>
    </header>
  );
};
