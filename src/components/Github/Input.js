import React from "react";
import "../Github/Fetch.css";
function Input({setSubmitClick,submitClick}) {
  return (
    <div className='inputone'>
      <label htmlFor="username">
        Enter a username to search for user profile and repositories
      </label>
      <input
        type="text"
        id="username"
        placeholder="GitHub UserName"
        autoComplete="off"
        value={submitClick}
        onChange={(e) => {
          setSubmitClick(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
