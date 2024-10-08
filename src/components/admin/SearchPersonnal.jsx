import React, { useState } from "react";
import style from "./SearchPersonnal.module.css";

function SearchPersonnal({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); // ارسال جستجو به والدین
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.search}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="جستجو ..."
        />
        <button type="submit">جستجو</button>
      </div>
    </form>
  );
}

export default SearchPersonnal;
