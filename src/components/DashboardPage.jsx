import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


export function DashboardPage(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="absolute top-0 left-[80px] h-screen w-screen">
      <div className="flex flex-col">
        {props.children}
      </div>
    </div>
  );
}

export default DashboardPage;