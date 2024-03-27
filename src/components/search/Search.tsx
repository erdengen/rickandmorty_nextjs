import React from "react";

type Props = {};

const Search = (props: Props) => {
  const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative text-gray-600">
        <input
          type="text"
          placeholder="Search Something ..."
          className="form-input"
          name="search"
          autoComplete="off"
          onChange={(e) => {
            alert(e.target.value);
          }}
        />
        <button type="button" onClick={searchBtn} className="form-button">
          Arama
        </button>
      </div>
    </>
  );
};

export default Search;
