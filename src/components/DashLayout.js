import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
const DashLayout = () => {
  return (
    <>
      <DashHeader />
      {/* {apply different style to the pages need authentication} */}
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
