"use client";

import { useEffect, useState } from "react";
import { Counter } from "./Counter";

const ClientComp = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPostData(data.slice(0, 10));
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>ClientComp</h1>
      <button
        className="bg-amber-400 text-black p-3"
        onClick={() => alert("Button Click")}
      >
        Click Me
      </button>

      <Counter />

      <ul>
        {postData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ClientComp;
