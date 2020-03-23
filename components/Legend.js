import LegendItem from "./LegendItem";

const Legend = (props) => (
    <div>
        <LegendItem status={"danger"}>Closed</LegendItem>
        <LegendItem status={"warning"}>Delivery</LegendItem>
        <LegendItem status={"success"}>Pickup</LegendItem>
        <LegendItem status={"info"}>Curbside Pickup</LegendItem>
    </div>
);

export default Legend
