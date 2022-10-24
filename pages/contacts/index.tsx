import Heading from "../../components/Heading";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { UserInfo } from "../../types";
import { FC } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await res.json();

  if (!usersData) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      usersData
    }
  }
};

type ContactsProps = {
  usersData: UserInfo[];
}

const Contacts: FC<ContactsProps> = ({ usersData }) => {

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list" />
      <ul>
        {
          usersData.map(({ name, id }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default Contacts;