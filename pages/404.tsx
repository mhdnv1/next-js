import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Eror = () => {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 300);
  }, [router]);
  return (
    <div>
      <Head><title>Eror</title></Head>
      <Heading tag={"h2"} text={"Not Found"} />
    </div>
  );
};

export default Eror;
