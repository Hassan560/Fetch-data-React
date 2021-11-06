import React from "react";
import { useState } from "react/cjs/react.development";
import "../Github/Fetch.css";
import Input from "./Input";
import UserData from "./UserData";
function Fetch() {
  const [User, setUser] = useState(null);
  const [submitClick, setSubmitClick] = useState("");
  const search = () => {
    // if the user is empty its shows the if condition
    if (submitClick !== "") {
      setSubmitClick(User);
      // remove the space in the input feild
      let originalName = submitClick.split(" ").join("");
      //fetching data through gitHub
      fetch(`https://api.github.com/users/${originalName}`)
        .then((res) => res.json())
        .then((res) => setUser(res))
        .catch((error) => {
          console.log(error);
        });

      // after search the input feild empty
      setSubmitClick([]);
    } else {
      alert("Please search the User");
    }
  };
  return (
    <>
      <div>
        <h3 className="header">GitHub Finder</h3>
        <div className="main-content">
          <h1 className="context-header">Search GitHub Users</h1>
          <Input setSubmitClick={setSubmitClick} submitClick={submitClick} />
          <button onClick={search}>Search</button>
        </div>
        <UserData user={User} />
      </div>
    </>
  );
}

export default Fetch;
