import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Picture from "../public/logogrey.jpg";
import Socials from "../components/Social";
import { socials } from "./api/data/socials";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/socials");
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
};

export default function Home({ socials }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>home</title>
      </Head>
      <Socials socials={socials} />
      <Image src={Picture} placeholder="blur" width={1000} height={500} />
    </div>
  );
}
