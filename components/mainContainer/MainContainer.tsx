import { FC, ReactElement, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../common";

import styles from "./MainContainer.module.scss";

type MainContainerPropsTypes = {
  title: string;
  keywords?: string;
  children: ReactNode;
};

export const MainContainer: FC<MainContainerPropsTypes> = ({
  title,
  keywords,
  children,
}): ReactElement => (
  <>
    <Head>
      <meta name="keywords" content={`Next App, Example, ${keywords}`} />
      <title>{title}</title>
    </Head>
    <div className={styles.wrapper}>
      <header style={{ backgroundColor: "orange" }}>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  </>
);
