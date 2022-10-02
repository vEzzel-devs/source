function VPlacer(props) {
    const { width, height } = props;
    return (
        <div className={`w-[${width}] h-[${height}] p-2 flex flex-none justify-self-start self-start items-center justify-center`}>
            { props.children }
        </div>
    )
}

export default VPlacer