import navbar_bg from "../assets/images/navbar_bg.png";
import app_logo from "../assets/images/app_logo.png";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <NavLink to={to} className={({ isActive }) => (isActive ? "underline underline-offset-4  opacity-95 text-white" : " opacity-95 text-white")}>
    {label}
  </NavLink>
);

const Navbar = () => {
  return (
    <div className="relative w-full font-poppins">
      <img
        src={navbar_bg}
        alt="navigation background"
        className="absolute min-w-max w-full"
      />
      <nav className="flex flex-row justify-between mx-32">
        <div className="items-center flex">
            <img src={app_logo} alt="Antar Surya Jaya" className="opacity-95" />
        </div>
        <div className="flex items-centerflex py-10 font-bold space-x-16">
            <NavItem to="/" label={"Home"}/>
            <NavItem to="/service" label={"Service"}/>
            <NavItem to="/activity" label={"Activity"}/>
            <NavItem  to="/about" label={"About Us"}/>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
