import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import DocsSection from "../components/DocsSection";
import { DocsRouteContext } from "../context/DocsRouteContext";

function BodyContainer() {
    const { theme } = useContext(ThemeContext);
    const { section } = useContext(DocsRouteContext);

    return (
        <div className={"w-full md:w-5/6 h-full p-2 flex flex-col cursor-default" + theme.secondaryBg}>
            <div className={"w-full h-full overflow-y-scroll px-4" + theme.mainBg + theme.lightText + theme.scrollbar}>
                {section.map((sec, idx) => {
                    return (
                        <DocsSection
                        key={`docs-section-on-place-${idx}`} {...sec}/>
                    );
                })}
            </div>
        </div>
    )
}

export default BodyContainer