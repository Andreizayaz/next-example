import type { NextPage } from "next";
import Link from "next/link";

import { MainContainer } from "../components";

type postType = {
  id: number;
  title: string;
};

type PostsPropsTypes = {
  posts: postType[];
};

const Users: NextPage<PostsPropsTypes> = ({posts}) => {
  return (
    <MainContainer keywords="posts page" title="Posts">
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context: object) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();

  return {
    props: { posts }, // will be passed to the page component as props
  };
}