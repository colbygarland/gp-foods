const ListItem = (props) => (
    <li
        className="list-group-item"
    >
        {props.name}
        <span className={`legend-item__box ${props.status} float-right`}></span>
        <p style={{marginBottom:0}}><small className="text-muted">{props.phone ? props.phone : props.web ? props.web : ''}</small></p>
    </li>
);

export default ListItem
