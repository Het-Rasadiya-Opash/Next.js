import Posts from "./components/posts";
import { Suspense } from "react";

export default async function BlogPage() {


  const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );

  return (
    <>
      <h1>Blog Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts promise={promise} />
      </Suspense>
    </>
  );
}
