import Heading from "../../components/Heading";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};
const Contact = ({ post }) => {
  return (
    <div className="container">
      <Head>
        <title>post</title>
      </Head>
      <PostInfo post={post} />
    </div>
  );
};

export default Contact;
