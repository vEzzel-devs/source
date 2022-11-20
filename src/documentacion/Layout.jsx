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
        <TopBar/>
        <SidePanel/>
        <BodyContainer/>
      </DocsRouteContextProvider>
    </DocsDataContextProvider>
  )
}