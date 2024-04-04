import Head from "next/head";
import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty contact" />;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading tag="h2" text={title} />
      <div>
        <strong>title: </strong>
        {title}
      </div>
      <div>
        <strong>body: </strong>
        {body}
      </div>
    </>
  );
};

export default PostInfo;
