import type { NextPage } from "next";
import Head from "next/head";
import { Link } from "../components/common/link";

import { MainContainer } from "../components";

const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error 404: Page not found</title>
      </Head>

      <main>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link href="/" title="Back to Main Page" />
      </main>
    </>
  );
};

export default Error;
