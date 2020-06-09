import React from "react";

const SearchBox = () => {
  return (
    <form className="form-inline my-2 my-lg-0 float-right">
      <input className="form-control mr-sm-2" type="text" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchBox;
