import styles from "../../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const navigation = [
  {id: 1, title: "Home", path: "/"},
  {id: 2, title: "Posts", path: "/posts"},
  {id: 3, title: "Contacts", path: "/contacts"},
]

const Nav: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="logo" />
      </div>
      <ul className={styles.links}>
        {
          navigation.map(({id, title, path}) => (
            <li key={id}>
              <Link href={path}>
                <a className={pathname === path ? styles.active : null}>{title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;