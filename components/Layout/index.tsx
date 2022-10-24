import Header from "../Header";
import Footer from "../Footer";
import { ReactNode, FC } from "react";

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default Layout;