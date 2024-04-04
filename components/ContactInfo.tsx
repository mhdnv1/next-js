import Head from "next/head";
import Heading from "./Heading";
import {contcatType} from '../types'
import { FC } from "react";

type contactInfoProps = {
  contact:contcatType
}

const ContactInfo:FC<contactInfoProps> = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};
  
    if (!contact) {
      return <Heading tag="h3" text="Empty contact" />
    }
  
    return (
      <>
        <Head><title>{name}</title></Head>
        <Heading tag="h2" text={name} />
        <div>
          <strong>Email: </strong>
          {email}
        </div>
        <div>
          <strong>Address: </strong>
          {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div>
      </>
    );
};

export default ContactInfo;
