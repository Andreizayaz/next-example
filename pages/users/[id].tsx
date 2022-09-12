import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainContainer } from "../../components";

type UserPropsTypes = {
  user: {
    name: string;
  };
};

const User: NextPage<UserPropsTypes> = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer title={user.name}>
      <h1>User Id: {query.id}</h1>
      <p>User Name: {user.name}</p>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps({ params }: { params: object }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
