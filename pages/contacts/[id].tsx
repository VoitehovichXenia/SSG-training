import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import UserInfo from "../../components/UserInfo";
import { UserInfo as UserInfoType } from "../../types"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      user
    }
  }
};

type ContactProps = {
  user: UserInfoType;
}

const Contact: FC<ContactProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <UserInfo user={user} />
    </>
  )
};

export default Contact;