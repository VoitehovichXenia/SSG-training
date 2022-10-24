import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials`);
  const socials = await res.json();

  if (!socials) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials }
  }
}

const Main = ({ socials }) => {
  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <div className={styles.wrapper}>
      <Heading text="Hello" />
    </div>
    <Socials socials={socials} />
    </>
  )
};

export default Main;