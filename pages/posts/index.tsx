import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};
const Posts = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>posts</title>
      </Head>
      <Heading tag={"h2"} text={"Contacts List:"} />
      <div>
        {posts &&
          posts.map((item) => (
            <Link href={`/posts/${item.id}`}>
              <div style={{ padding: "20px", width: "50%" }} key={item.id}>
                title: ({item.title})<br />
                <br />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Posts;
