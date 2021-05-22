import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if(!localStorage.getItem('auth')) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div>
      Dashboard{" "}
      <p>
        <button onClick={logoutHandler}>Logout</button>
      </p>
    </div>
  );
};

export default Dashboard;
