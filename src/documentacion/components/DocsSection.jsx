import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function DocsSection({ title, level, content }) {
    const { theme } = useContext(ThemeContext);
    return (
        <section className="my-6" id={title}>
            <div className={"space-y-3 flex flex-col"}>
                <h1 className={`text-${4-level}xl underlined bold` + theme.mainText}>{title}</h1>
                {content.map((element, idx) => {
                    return (
                        <div key={`key-for-${title.split(" ")[0]}-sub-section-number-${idx}`}>
                            {element}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default DocsSection