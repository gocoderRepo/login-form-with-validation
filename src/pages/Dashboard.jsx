import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Child from "./Child"

const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
	  <hr/>
      <div className="App">Dashboard</div>
	  <Child name = "goCoder"/>
    </>
  );
};

export default Dashboard;
