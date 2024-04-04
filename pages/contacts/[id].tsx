import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contact: data },
  };
};
const Contact = ({ contact }) => {
  return (
    <div className="container">
      <Head>
        <title>contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </div>
  );
};

export default Contact;
