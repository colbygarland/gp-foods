import LegendItem from "./LegendItem";

const Legend = (props) => (
    <div>
        <LegendItem status={"warning"}>Delivery</LegendItem>
        <LegendItem status={"success"}>Pickup / Takeout / Curbside</LegendItem>
    </div>
);

export default Legend
