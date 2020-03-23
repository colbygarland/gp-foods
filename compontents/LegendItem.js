const LegendItem = (props) => (
    <div className="legend-item d-flex">
        <span className={`legend-item__box ${props.status}`}></span>
        <p>{props.children}</p>
    </div>
);

export default LegendItem
