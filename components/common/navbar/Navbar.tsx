import { FC, ReactElement } from "react";

import { Link } from "../link";

import { linksData } from "./data";

import styles from "./Navbar.module.scss";

export const Navbar: FC = (): ReactElement => (
  <nav className={styles.navbar}>
    <ul className={styles['nav-menu']}>
      {linksData.map(({ href, title }) => (
        <Link
          key={title}
          href={href}
          title={title}
          classes={styles["nav-menu__link"]}
        />
      ))}
    </ul>
  </nav>
);
