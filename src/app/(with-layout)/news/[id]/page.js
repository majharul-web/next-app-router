import React from "react";

const DynamicNews = ({ params, searchParams }) => {
  console.log("DynamicNews page", searchParams);
  return (
    <div>
      <h3>News: {params?.id}</h3>
    </div>
  );
};

export default DynamicNews;
