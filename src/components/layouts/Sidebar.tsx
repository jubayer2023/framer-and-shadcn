import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 p-3 h-screen sticky top-0 left-0 overflow-auto bg-light-gray">
      <nav className="flex flex-col space-y-2 ">
        <NavLink
          to={"dashboard"}
          className={({ isActive }) =>
            cn(
              " bg-gray px-2 py-1 rounded-sm hover:bg-dark-gray hover:text-white hover:font-semibold hover:text-sm transition-all flex items-center gap-2 ",
              {
                "bg-dark-gray text-white  font-semibold text-sm": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Dashboard</span>
        </NavLink>
        <NavLink
          to={"/admin/service-list"}
          className={({ isActive }) =>
            cn(
              " bg-gray px-2 py-1 rounded-sm hover:bg-dark-gray hover:text-white hover:font-semibold hover:text-sm transition-all flex items-center gap-2 ",
              {
                "bg-dark-gray text-white  font-semibold text-sm": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Service list</span>
        </NavLink>
        <NavLink
          to={"/admin/add-service"}
          className={({ isActive }) =>
            cn(
              " bg-gray px-2 py-1 rounded-sm hover:bg-dark-gray hover:text-white hover:font-semibold hover:text-sm transition-all flex items-center gap-2 ",
              {
                "bg-dark-gray text-white  font-semibold text-sm": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Add service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
