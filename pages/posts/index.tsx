import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    }
  }
}

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts" />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Posts;