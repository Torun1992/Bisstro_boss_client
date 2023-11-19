import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard  side bar */}
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashbord/userHome">
              <FaHome></FaHome>
              user Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ( {cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/review">
              <FaAd></FaAd>
              Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/bookings">
              <FaList></FaList>
              Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
