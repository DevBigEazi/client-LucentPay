import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const UsersDashboard = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section>
      <h1>Welcome to your dashboard</h1>
      <br />
      <p>You are logged in!</p>
      <Link to="/admin">Go to the Admin page</Link>
      <div className="flexGrow">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default UsersDashboard;
