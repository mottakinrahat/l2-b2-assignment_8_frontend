import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen  items-center">
      <Image
        src="https://i.ibb.co/C9GsdG4/df.png"
        alt="s"
        height={400}
        width={400}
      />
      <h2 className="text-4xl font-bold">This page is not Found</h2>
    </div>
  );
};

export default NotFoundPage;
