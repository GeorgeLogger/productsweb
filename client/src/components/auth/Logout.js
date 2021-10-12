import { logout } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { NavLink } from "reactstrap";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <NavLink onClick={() => dispatch(logout())} href="#">
      Logout
    </NavLink>
  );
};

export default Logout;
