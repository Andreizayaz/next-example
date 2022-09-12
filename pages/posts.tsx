import type { NextPage } from "next";

import { MainContainer } from "../components";

const Users: NextPage = () => {
  return (
    <MainContainer keywords="posts page" title="Posts">
      <h1>Posts</h1>
      <p>Here will be posts list</p>
    </MainContainer>
  );
};

export default Users;
