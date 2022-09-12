import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MainContainer } from "../../components";

type PostPropsTypes = {
  post: {
    title: string;
  };
};

const User: NextPage<PostPropsTypes> = ({ post }) => {
  const { query } = useRouter();

  return (
    <MainContainer title={post.title}>
      <h1>User Id: {query.id}</h1>
      <p>Post Title: {post.title}</p>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps({ params }: { params: any }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return {
    props: { post }, // will be passed to the page component as props
  };
}
