import "./SideNav.css";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";

function SideNav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

export default SideNav;
