import styles from "../../styles/Socials.module.scss";
import Head from "next/head";
import { Socials } from "../../types";
import { FC } from "react";

type SocialsProps = {
  socials: Socials[];
}

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
      {socials && socials.map(({ id, path, icon }) => (
        <li key={id}>
          <a href={path} target="_blank" rel="noreffer noopener">
            <i className={`fab fa-${icon}`} aria-hidden={true}/>
          </a>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Socials;