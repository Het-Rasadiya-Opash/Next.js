import React from "react";

const SinglePageArticlePage = async ({ params }) => {
  const { id } = await params;
  return <div>SinglePageArticle Page : {id}</div>;
};

export default SinglePageArticlePage;
