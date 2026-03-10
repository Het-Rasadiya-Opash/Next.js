"use client";

import { use } from "react";

const SingleProfilePost = (props) => {
  //   const user = await props.params;

  // use - without async await promise data provide
  const user = use(props.params);

  return (
    <h1>
      username : {user.username} postId : {user.postId}{" "}
    </h1>
  );
};

export default SingleProfilePost;
