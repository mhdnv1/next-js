import styles from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  const navigateion = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 1, title: "Contacts", path: "/contacts" },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          placeholder="blur"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <ul className={styles.menu}>
        {navigateion.map((item) => (
          <li key={item.id}>
            <Link
              className={pathname == item.path ? styles.active : null}
              href={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
