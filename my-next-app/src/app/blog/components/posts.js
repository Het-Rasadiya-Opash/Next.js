"use client";
import Link from "next/link";
import React, { use } from "react";

const Posts = ({ promise }) => {
  const posts = use(promise);
  return (
    <div className="flex gap-4 flex-col flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="border p-4">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-indigo-500 ">{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
