function VContainer(props) {
    const { w, mw } = props;
    let width = Math.floor(100 * w / mw);
    return (
        <div className={`w-[${width}%] p-1 px-2 flex flex-row justify-self-start self-center items-center justify-center`}>
            { props.children }
        </div>
    )
}

export default VContainer