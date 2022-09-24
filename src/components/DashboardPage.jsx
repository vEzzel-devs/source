import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


export function DashboardPage(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="absolute top-0 pl-[80px] pt-16 h-screen w-screen">
      {props.children}
    </div>
  );
}

export default DashboardPage;