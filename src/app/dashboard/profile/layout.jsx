import SideLayout from "@/components/Master/Side-Layout";
import "@/assets/css/style.css";
import "@/assets/css/dropdownmenu.css";
import "@/assets/css/sidebar.css";
import "@/assets/css/animate.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Layout = ({ children }) => {
  return <SideLayout>{children}</SideLayout>;
};

export default Layout;
