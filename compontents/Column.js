const Column = (props) => (
    <div className=
             {`col-sm-${props.sm ? props.sm : 12} col-md-${props.md ? props.md : props.sm ? props.sm : 12} col-lg-${props.lg ? props.lg : props.md ? props.md : 12}`}>
        {props.children}
    </div>
);

export default Column
