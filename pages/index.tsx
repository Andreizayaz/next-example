import type { NextPage } from "next";

import { MainContainer } from "../components";

const Home: NextPage = () => {
  return <MainContainer keywords="main page" title="Next Example App">
    <h1>Hello From Next</h1>
    <p>It&apos;s Main Page</p>
  </MainContainer>;
};

export default Home;
