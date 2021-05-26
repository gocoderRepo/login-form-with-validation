import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Friend from "./Friend"

const Child = ({name}) => {

    const [availability, setavailability] = React.useState('yes')
  return (
    <>
      {/* <button onClick={logoutHandler} className="btn btn-primary">
        Logout
      </button> */}
      <hr />
      <div className="App">Child {name}</div>
      <Friend availability={availability} setavailability={setavailability}/>
    </>
  );
};

export default Child;
