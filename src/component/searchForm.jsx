import React from "react";

const SearchForm = ({value, onChange, onSearchProduct}) => {

  return (
    <div className=" flex-grow-4 col-8 bd-highlight ">
      <div className="d-flex">
        <input
          className="form-control mb-3 bg-secondary text-white"
          type="search"
          placeholder="Поиск"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
    
  );
};

export default SearchForm;