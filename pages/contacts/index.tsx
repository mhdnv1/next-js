import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { users: data },
  };
};
const Index = ({ users }) => {
  return (
    <div className="container">
      <Head>
        <title>contacts</title>
      </Head>
      <Heading tag={"h2"} text={"Contacts List:"} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          textAlign: "justify",
        }}
      >
        {users &&
          users.map((item) => (
            <Link href={`/contacts/${item.id}`}>
              <div style={{ padding: "20px", width: "50%" }} key={item.id}>
                username: {item.username}
                <br />
                name: ({item.name})<br />
                email: {item.email}
                <br />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Index;
