
import { Post } from "./Post";
import classes from './PostList.module.css';
import { useLoaderData } from "react-router-dom";

export function PostList() {

  const posts = useLoaderData();

  return <>
    {posts.length > 0 && <ul className={classes.posts}>
      {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
    </ul>}
    {posts.length === 0 && <div style={{ textAlign: 'center', color: 'white' }}>
      <h2>There are no posts yet.</h2>
      <p>Maybe add some?</p>
    </div>}
  </>
}