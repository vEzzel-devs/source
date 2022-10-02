function VPlacer(props) {
    const { width } = props;
    return (
        <div className={`w-${width} p-2 flex flex-none justify-self-start self-center items-center justify-center`}>
            { props.children }
        </div>
    )
}

export default VPlacer