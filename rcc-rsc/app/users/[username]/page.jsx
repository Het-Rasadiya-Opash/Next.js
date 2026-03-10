import React from "react";

const SingleProfile = async (props) => {
  const user = await props.params;

  return <h1>username : {user.username}</h1>;
};

export default SingleProfile;
