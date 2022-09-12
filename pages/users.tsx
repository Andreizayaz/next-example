import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { MainContainer } from "../components";

import { userType } from "./usersTypes";

type UsersPropsTypes = {
  users: userType[];
};

const Users: NextPage<UsersPropsTypes> = ({ users }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  return (
    <MainContainer keywords="users page" title="Users">
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <h1>Users</h1>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context: object) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
