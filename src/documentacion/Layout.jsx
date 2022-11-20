import { DocsDataContextProvider } from "./context/DocsDataContext";
import { DocsRouteContextProvider } from "./context/DocsRouteContext";
import TopBar from "./sections/TopBar";
import SidePanel from "./sections/SidePanel";
import BodyContainer from "./sections/BodyContainer";

export function Layout() {
  window.onhashchange = function () {
    history.pushState(null, "", window.location.pathname);
  }

  return (
    <DocsDataContextProvider>
      <DocsRouteContextProvider>
        <div className="absolute top-0 pt-16 h-screen w-screen flex flex-row">
          <SidePanel/>
          <BodyContainer/>
        </div>
        <TopBar/>
      </DocsRouteContextProvider>
    </DocsDataContextProvider>
  )
}