const ListItem = (props) => (
    <li
        className="list-group-item"
    >
        <a
            href={`tel:${props.phone}`}
            style={{
                display:'block'
            }}
        >
        {props.name}
            <span className={`legend-item__box ${props.status} float-right`}></span>
            <p style={{marginBottom:0}}><small className="text-muted">{props.phone ? props.phone : props.web ? props.web : ''}</small></p>
        </a>
    </li>
);

export default ListItem
