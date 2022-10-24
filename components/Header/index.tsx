import { FC } from "react";
import Heading from "../Heading";
import Nav from "../Nav";

const Header: FC = () => {
  return (
    <header>
      <Heading tag="h3" text="Next.js app" />
      <Nav />
    </header>
  )
};

export default Header;