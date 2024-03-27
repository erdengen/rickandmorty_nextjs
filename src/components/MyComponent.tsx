import React from "react";

type Props = {};

const MyComponent = (props: Props) => {
  const render = (id: number, title: string, age?: number, getSlug?: string) =>
    `${id} - ${title} - ${age} - ${getSlug}`;

  const param = {
    id: 5,
    getSlug: function () {
      return `post-${this.id}`;
    },
    title: "deneme",
    age: 15,
  };
  return <div>MyComponent</div>;
};

export default MyComponent;
